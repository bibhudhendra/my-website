import React, { useRef, useEffect, useState } from 'react';
import amazonLogo from '../assets/logos/amazon-logo.png';
import awsLogo from '../assets/logos/aws-logo.png';
import olaLogo from '../assets/logos/olacabs-logo.png';
import './TimelineGraph.css';

const TimelineGraph = () => {
  const timelineRef = useRef(null);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Combined timeline data with proper dates
  const timelineData = [
    // Education
    {
      startDate: new Date(2003, 7), // Jun 2003
      endDate: new Date(2011, 5), // May 2011
      title: 'Primary Education',
      institution: 'Saraswati Vidya Mandir, Barada',
      type: 'education',
      category: 'school',
      icon: 'fa-school'
    },
    {
      startDate: new Date(2011, 5), // Jun 2011
      endDate: new Date(2014, 5), // Apr 2014
      title: 'High School',
      institution: 'Palei High School, Palei',
      type: 'education',
      category: 'school (Odisha Board)',
      icon: 'fa-school'
    },
    {
      startDate: new Date(2014, 5), // Jun 2014
      endDate: new Date(2016, 5), // May 2016
      title: '11th & 12th Science',
      institution: 'Einstein Science College, Cuttack',
      type: 'education',
      category: '(Odisha Board)',
      icon: 'fa-university'
    },
    {
      startDate: new Date(2016, 6), // Jun 2016
      endDate: new Date(2020, 5), // May 2020
      title: 'Computer Science and Engineering',
      institution: 'NIT Jamshedpur',
      type: 'education',
      category: 'B-Tech',
      icon: 'fa-university'
    },
    // Career
    {
      startDate: new Date(2020, 7), // September 2020
      endDate: new Date(2021, 5), // June 2021
      title: 'Software Engineer',
      location: 'Bengaluru',
      type: 'career',
      logo: olaLogo
    },
    {
      startDate: new Date(2021, 5), // June 2021
      endDate: new Date(2025, 6), // July 2024
      title: 'Software Engineer',
      location: 'Hyderabad 🇮🇳',
      type: 'career',
      logo: amazonLogo
    },
    {
      startDate: new Date(2025, 6), // July 2024
      endDate: new Date(), // Present
      title: 'SDE',
      location: 'Seattle 🇺🇸',
      type: 'career',
      logo: awsLogo
    }
  ];

  // Sort timeline data by start date
  const sortedData = timelineData.sort((a, b) => a.startDate - b.startDate);

  // Calculate timeline dimensions
  const startYear = 2003;
  const endYear = currentYear + 1;
  const totalYears = endYear - startYear;
  const yearWidth = 120; // pixels per year
  const timelineWidth = totalYears * yearWidth;

  // Calculate position for each event
  const getEventPosition = (date) => {
    const yearProgress = date.getFullYear() - startYear + (date.getMonth() / 12);
    return yearProgress * yearWidth;
  };

  // Get event width
  const getEventWidth = (startDate, endDate) => {
    const startPos = getEventPosition(startDate);
    const endPos = getEventPosition(endDate);
    return Math.max(endPos - startPos, 80); // Minimum width of 80px
  };

  // Format date range
  const formatDateRange = (startDate, endDate) => {
    const isPresent = endDate.getTime() > new Date().getTime() - 86400000; // Within last day
    const startStr = startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    const endStr = isPresent ? 'Present' : endDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    return `${startStr} - ${endStr}`;
  };

  // Scroll to show recent years on mount
  useEffect(() => {
    if (timelineRef.current) {
      // Show 2022-2026 timeline view to focus on current AWS position
      const targetYear = 2022;
      const recentYearPosition = (targetYear - startYear) * yearWidth;
      timelineRef.current.scrollLeft = Math.max(0, recentYearPosition);
    }
  }, [startYear, yearWidth]);

  // Generate year markers
  const yearMarkers = [];
  for (let year = startYear; year <= endYear; year++) {
    yearMarkers.push(
      <div
        key={year}
        className="year-marker"
        style={{ left: `${(year - startYear) * yearWidth}px` }}
      >
        <div className="year-line"></div>
        <div className="year-label">{year}</div>
      </div>
    );
  }

  return (
    <section className="timeline-graph">
      <h2>Career Journey & Education Timeline</h2>
      
      <div className="timeline-container" ref={timelineRef}>
        <div className="timeline-content" style={{ width: `${timelineWidth}px` }}>
          
          {/* Timeline axis */}
          <div className="timeline-axis">
            {yearMarkers}
          </div>

          {/* Unified timeline track */}
          <div className="timeline-track unified-track">
            {sortedData.map((item, index) => (
              <div
                key={`${item.type}-${index}`}
                className={`timeline-event ${item.type}-event`}
                style={{
                  left: `${getEventPosition(item.startDate)}px`,
                  width: `${getEventWidth(item.startDate, item.endDate)}px`
                }}
              >
                <div className="event-card">
                  {item.type === 'education' ? (
                    <div className="event-icon">
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                  ) : (
                    <div className="event-logo">
                      <img src={item.logo} alt={`${item.institution} logo`} />
                    </div>
                  )}
                  <div className="event-content">
                    <div className="event-title">{item.title}</div>
                    <div className="event-institution">{item.institution}</div>
                    {item.category && <div className="event-category">{item.category}</div>}
                    {item.location && (
                      <div className="event-location">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Current time indicator */}
          <div 
            className="current-time-indicator"
            style={{ left: `${getEventPosition(new Date())}px` }}
          >
            <div className="current-time-line"></div>
            <div className="current-time-label">Now</div>
          </div>

        </div>
      </div>

      <div className="timeline-controls">
        <div className="scroll-hint">
          <i className="fas fa-arrow-left"></i>
          <span>Scroll to explore timeline</span>
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>
    </section>
  );
};

export default TimelineGraph;
