import { useState, useEffect, useRef } from 'react';
import Breadcrumb from '../components/Breadcrumb';

// Exact historical records from the museum archive (clean listed strings)
const OTD_RECORDS = {
    March: {
        26: [
            'Declaration of Independence transmitted in the early hours following the midnight military onslaught of Operation Searchlight.',
            'The declaration is broadcast from the Kalurghat Swadhin Bangla Biplobi Betar Kendro in Chittagong.',
            'Bengali personnel of the East Bengal Regiment, EPR, and police units initiate armed resistance across the country.'
        ],
        27: [
            'Major Ziaur Rahman broadcasts the declaration of independence on behalf of Bangabandhu Sheikh Mujibur Rahman from Kalurghat radio station.',
            'Curfew is temporarily eased in Dhaka, revealing widespread devastation and prompting thousands of families to flee into the countryside.'
        ],
        28: [
            'The curfew is loosened in Dhaka City from 7:00am in the morning to 4:00pm in the evening.',
            'Later that night help is sought from the people of the world via the "Shwadhin Bangla Biplobi Betar Kendro" from Chittagong.',
            'Pakistan Navy fired shots in the port city in various areas. And in the port area, the Pakistan Navy disarms the Bangladeshi Navy men and murdered them.',
            'On the other side of Dhaka, from Jinjira, freedom fighters and Pak Bahini exchange gunfire. Almost 3/4th of the country remains in control of the freedom.'
        ],
        29: [
            'Bengali freedom fighters encircle Pakistani garrisons in Kushtia and northern sectors, establishing early liberated pockets.',
            'Civil disobedience transitions into organized guerrilla ambushes along road networks and river crossings.'
        ],
        30: [
            'Swadhin Bangla Biplobi Betar Kendro at Kalurghat comes under Pakistani aerial attack; the mobile transmitter is dismantled and relocated to safety.',
            'The Indian Parliament unanimously passes a resolution declaring full solidarity and support for the people of Bangladesh.'
        ]
    }
};

const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const DAYS_IN_MONTH = {
    January: 31, February: 28, March: 31, April: 30, May: 31, June: 30,
    July: 31, August: 31, September: 30, October: 31, November: 30, December: 31
};

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

function ordinal(n) {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export default function OnThisDay() {
    const [selectedMonth, setSelectedMonth] = useState('March');
    const [selectedDay, setSelectedDay] = useState(28);
    const [showGrid, setShowGrid] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const dayScrollRef = useRef(null);

    useEffect(() => {
        document.body.classList.add('page-on-this-day');
        document.title = 'On This Day | Liberation War Museum';
        return () => {
            document.body.classList.remove('page-on-this-day');
        };
    }, []);

    const monthIndex = MONTHS.indexOf(selectedMonth);
    const totalDays = DAYS_IN_MONTH[selectedMonth] || 31;

    // Calculate day of the week in 1971
    const dayOfWeek = new Date(1971, monthIndex, selectedDay).toLocaleDateString('en-US', { weekday: 'long' });

    // Calculate start day of month in 1971 (for calendar grid)
    const firstWeekday = new Date(1971, monthIndex, 1).getDay();

    // Scroll day scrubber into view
    useEffect(() => {
        if (!dayScrollRef.current) return;
        const activeBtn = dayScrollRef.current.querySelector('.otd-day-btn--active');
        if (activeBtn) {
            activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    }, [selectedDay, selectedMonth]);

    const changeDate = (month, day) => {
        setIsAnimating(true);
        setSelectedMonth(month);
        setSelectedDay(day);
        setTimeout(() => setIsAnimating(false), 160);
    };

    // Month Navigation
    const prevMonth = () => {
        const prevIdx = monthIndex > 0 ? monthIndex - 1 : MONTHS.length - 1;
        const newMonth = MONTHS[prevIdx];
        const maxDay = DAYS_IN_MONTH[newMonth];
        changeDate(newMonth, Math.min(selectedDay, maxDay));
    };

    const nextMonth = () => {
        const nextIdx = monthIndex < MONTHS.length - 1 ? monthIndex + 1 : 0;
        const newMonth = MONTHS[nextIdx];
        const maxDay = DAYS_IN_MONTH[newMonth];
        changeDate(newMonth, Math.min(selectedDay, maxDay));
    };

    // Day Navigation
    const prevDay = () => {
        if (selectedDay > 1) {
            changeDate(selectedMonth, selectedDay - 1);
        } else {
            const prevIdx = monthIndex > 0 ? monthIndex - 1 : MONTHS.length - 1;
            const newMonth = MONTHS[prevIdx];
            changeDate(newMonth, DAYS_IN_MONTH[newMonth]);
        }
    };

    const nextDay = () => {
        if (selectedDay < totalDays) {
            changeDate(selectedMonth, selectedDay + 1);
        } else {
            const nextIdx = monthIndex < MONTHS.length - 1 ? monthIndex + 1 : 0;
            changeDate(MONTHS[nextIdx], 1);
        }
    };

    // "Try a New Day" - Pick another day from March 26-30 or cycle
    const handleTryNewDay = (e) => {
        e.preventDefault();
        const availableDays = [26, 27, 28, 29, 30];
        const otherDays = availableDays.filter(d => d !== selectedDay);
        const randomDay = otherDays[Math.floor(Math.random() * otherDays.length)];
        changeDate('March', randomDay);
    };

    // Get events for the selected date
    const events = OTD_RECORDS[selectedMonth]?.[selectedDay] || [];
    const hasEvents = events.length > 0;

    // Generate array of day numbers for scrubber [1..totalDays]
    const allDays = Array.from({ length: totalDays }, (_, i) => i + 1);

    // Visible window around selected day for wheel display
    const visibleDays = [];
    for (let offset = -2; offset <= 2; offset++) {
        let d = selectedDay + offset;
        if (d >= 1 && d <= totalDays) {
            visibleDays.push(d);
        }
    }

    return (
        <>
            {/* HERO */}
            <section className="hero hero--on-this-day">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush">
                        <div className="hero-card__title">On This Day</div>
                        <div className="hero-card__desc">
                            During the year of 1971 everyday was a story. A story of heroism, a story of sacrifice, a story of
                            suffering. Explore through these stories on the basis of a chronological timeline of the days in wartime.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <main className="content content--otd">
                <section className="block block--otd">
                    <div className="separator"></div>
                    <Breadcrumb />
                    <div className="block__cap block__cap--center">
                        <span className="cap__title">ON THIS DAY</span>
                    </div>

                    {/* PLAYABLE CALENDAR INTERACTION BOARD */}
                    <div className="otd-playable-calendar">
                        {/* Month Selector Carousel */}
                        <div className="otd-cal-header">
                            <button
                                type="button"
                                className="otd-nav-arrow"
                                onClick={prevMonth}
                                aria-label="Previous month"
                                title="Previous Month"
                            >
                                ‹
                            </button>

                            <div className="otd-month-pill-wrap">
                                <span className="otd-current-month">{selectedMonth}</span>
                                <span className="otd-year-tag">1971</span>
                            </div>

                            <button
                                type="button"
                                className="otd-nav-arrow"
                                onClick={nextMonth}
                                aria-label="Next month"
                                title="Next Month"
                            >
                                ›
                            </button>

                            {/* Toggle Grid Button */}
                            <button
                                type="button"
                                className={`otd-grid-toggle-btn${showGrid ? ' active' : ''}`}
                                onClick={() => setShowGrid(!showGrid)}
                                title={showGrid ? 'Close calendar grid' : 'Open full month calendar grid'}
                            >
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                                {showGrid ? 'Timeline View' : 'Month Grid'}
                            </button>
                        </div>

                        {/* MODE 1: PLAYABLE DAY SCRUBBER WHEEL */}
                        {!showGrid ? (
                            <div className="otd-day-wheel-section">
                                <div className="otd-wheel-row">
                                    <button
                                        type="button"
                                        className="otd-wheel-arrow"
                                        onClick={prevDay}
                                        aria-label="Previous day"
                                        title="Previous Day"
                                    >
                                        ‹
                                    </button>

                                    <div className="otd-wheel-track" ref={dayScrollRef}>
                                        {allDays.map((d) => {
                                            const isSelected = d === selectedDay;
                                            const dayHasRecord = !!OTD_RECORDS[selectedMonth]?.[d];
                                            return (
                                                <button
                                                    key={d}
                                                    type="button"
                                                    className={`otd-day-btn${isSelected ? ' otd-day-btn--active' : ''}${dayHasRecord ? ' otd-day-btn--has-event' : ''}`}
                                                    onClick={() => changeDate(selectedMonth, d)}
                                                    aria-label={`Select ${ordinal(d)}`}
                                                >
                                                    <span className="otd-day-num">{ordinal(d)}</span>
                                                    {dayHasRecord && <span className="otd-record-dot" />}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    <button
                                        type="button"
                                        className="otd-wheel-arrow"
                                        onClick={nextDay}
                                        aria-label="Next day"
                                        title="Next Day"
                                    >
                                        ›
                                    </button>
                                </div>
                            </div>
                        ) : (
                            /* MODE 2: PLAYABLE MONTH CALENDAR GRID */
                            <div className="otd-grid-view">
                                <div className="otd-grid-weekdays">
                                    {WEEKDAYS.map((w) => (
                                        <div key={w} className="otd-grid-weekday">{w}</div>
                                    ))}
                                </div>

                                <div className="otd-grid-cells">
                                    {/* Empty cells for weekday offset */}
                                    {Array.from({ length: firstWeekday }).map((_, i) => (
                                        <div key={`empty-${i}`} className="otd-grid-cell otd-grid-cell--empty" />
                                    ))}

                                    {/* Day buttons */}
                                    {allDays.map((d) => {
                                        const isSelected = d === selectedDay;
                                        const dayHasRecord = !!OTD_RECORDS[selectedMonth]?.[d];
                                        return (
                                            <button
                                                key={d}
                                                type="button"
                                                className={`otd-grid-cell otd-grid-cell--day${isSelected ? ' active' : ''}${dayHasRecord ? ' has-record' : ''}`}
                                                onClick={() => {
                                                    changeDate(selectedMonth, d);
                                                    setShowGrid(false);
                                                }}
                                            >
                                                <span className="grid-day-number">{d}</span>
                                                {dayHasRecord && <span className="grid-record-dot" />}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Selected Date Plaque */}
                        <div className="otd-selected-badge">
                            <span className="otd-selected-dayname">{dayOfWeek}</span>
                            <span className="otd-selected-date-text">
                                <strong>{ordinal(selectedDay)}</strong> {selectedMonth}, 1971
                            </span>
                        </div>
                    </div>

                    {/* EVENT CONTENT BOARD: CLEAN LISTED / PARAGRAPH TYPE */}
                    <div className={`otd-events-board${isAnimating ? ' otd-events-board--fade' : ''}`}>
                        {hasEvents ? (
                            <ul className="otd-events-list">
                                {events.map((paragraph, idx) => (
                                    <li key={idx} className="otd-event-entry">
                                        <span className="otd-entry-bullet">◆</span>
                                        <p className="otd-entry-text">{paragraph}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="otd-no-record-box">
                                <p className="otd-no-record-msg">
                                    No archival entries cataloged in this physical collection for {ordinal(selectedDay)} {selectedMonth}, 1971.
                                </p>
                                <button
                                    type="button"
                                    className="otd-reset-btn"
                                    onClick={() => changeDate('March', 28)}
                                >
                                    Jump to 28th March, 1971
                                </button>
                            </div>
                        )}
                    </div>

                    {/* ACTION CENTER */}
                    <div className="action-center otd-action-center">
                        <a
                            className="btn-dark-grunge"
                            href="#"
                            onClick={handleTryNewDay}
                            title="Explore another day in wartime"
                        >
                            Try a New Day
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}
