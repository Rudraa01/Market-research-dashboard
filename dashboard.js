// Market Research Dashboard JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Chart.js default configuration
    Chart.defaults.font.family = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    Chart.defaults.font.size = 12;
    Chart.defaults.color = '#2c3e50';

    // Color palette
    const colors = {
        primary: '#3498db',
        secondary: '#2980b9',
        success: '#2ecc71',
        warning: '#f39c12',
        danger: '#e74c3c',
        info: '#17a2b8',
        light: '#f8f9fa',
        dark: '#343a40'
    };

    // Industry Trends Chart
    const trendsCtx = document.getElementById('trendsChart').getContext('2d');
    new Chart(trendsCtx, {
        type: 'doughnut',
        data: {
            labels: ['AI-Driven Personalization', 'Customer Retention Focus', 'Spatial Computing', 'M&A Acceleration', 'Other Trends'],
            datasets: [{
                data: [30, 25, 20, 15, 10],
                backgroundColor: [
                    colors.primary,
                    colors.success,
                    colors.warning,
                    colors.info,
                    colors.light
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                },
                title: {
                    display: true,
                    text: 'Market Trend Distribution 2025',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                }
            }
        }
    });

    // Customer Segments Chart
    const segmentCtx = document.getElementById('segmentChart').getContext('2d');
    new Chart(segmentCtx, {
        type: 'bar',
        data: {
            labels: ['Digital-First\nProfessionals', 'Environmental\nConscious', 'AI-Enhanced\nUsers', 'Retention-Focused\nCustomers'],
            datasets: [{
                label: 'Market Share (%)',
                data: [72, 66, 45, 58],
                backgroundColor: [
                    colors.primary,
                    colors.success,
                    colors.warning,
                    colors.info
                ],
                borderColor: [
                    colors.secondary,
                    '#27ae60',
                    '#e67e22',
                    '#138496'
                ],
                borderWidth: 2,
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Customer Segment Penetration',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                },
                x: {
                    ticks: {
                        maxRotation: 0,
                        font: {
                            size: 10
                        }
                    }
                }
            }
        }
    });

    // Competitive Landscape Chart
    const competitiveCtx = document.getElementById('competitiveChart').getContext('2d');
    new Chart(competitiveCtx, {
        type: 'radar',
        data: {
            labels: ['Market Share', 'Innovation', 'Customer Satisfaction', 'Digital Presence', 'Sustainability', 'AI Adoption'],
            datasets: [
                {
                    label: 'Industry Leaders',
                    data: [85, 90, 88, 92, 75, 95],
                    backgroundColor: 'rgba(52, 152, 219, 0.2)',
                    borderColor: colors.primary,
                    borderWidth: 2,
                    pointBackgroundColor: colors.primary
                },
                {
                    label: 'Market Average',
                    data: [50, 55, 60, 65, 45, 40],
                    backgroundColor: 'rgba(241, 196, 15, 0.2)',
                    borderColor: colors.warning,
                    borderWidth: 2,
                    pointBackgroundColor: colors.warning
                },
                {
                    label: 'Emerging Players',
                    data: [25, 75, 70, 85, 80, 70],
                    backgroundColor: 'rgba(46, 204, 113, 0.2)',
                    borderColor: colors.success,
                    borderWidth: 2,
                    pointBackgroundColor: colors.success
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Competitive Positioning Analysis',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20
                    }
                }
            }
        }
    });

    // Market Opportunities Chart
    const opportunitiesCtx = document.getElementById('opportunitiesChart').getContext('2d');
    new Chart(opportunitiesCtx, {
        type: 'bubble',
        data: {
            datasets: [{
                label: 'Market Opportunities',
                data: [
                    { x: 90, y: 85, r: 15, label: 'AI Personalization' },
                    { x: 75, y: 70, r: 12, label: 'Spatial Computing' },
                    { x: 66, y: 60, r: 10, label: 'Environmental Focus' },
                    { x: 72, y: 55, r: 8, label: 'Digital-First Services' },
                    { x: 45, y: 40, r: 6, label: 'Traditional Approaches' }
                ],
                backgroundColor: [
                    colors.primary,
                    colors.success,
                    colors.warning,
                    colors.info,
                    colors.light
                ],
                borderColor: [
                    colors.secondary,
                    '#27ae60',
                    '#e67e22',
                    '#138496',
                    colors.dark
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Opportunity Matrix: Impact vs. Feasibility',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const point = context.raw;
                            return `${point.label}: Impact ${point.x}%, Feasibility ${point.y}%`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Market Impact (%)'
                    },
                    min: 0,
                    max: 100
                },
                y: {
                    title: {
                        display: true,
                        text: 'Implementation Feasibility (%)'
                    },
                    min: 0,
                    max: 100
                }
            }
        }
    });

    // Performance Benchmarks Chart
    const benchmarkCtx = document.getElementById('benchmarkChart').getContext('2d');
    new Chart(benchmarkCtx, {
        type: 'line',
        data: {
            labels: ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025 (Proj)', 'Q2 2025 (Proj)'],
            datasets: [
                {
                    label: 'AI Adoption Rate',
                    data: [25, 35, 50, 65, 75, 85],
                    borderColor: colors.primary,
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Customer Retention',
                    data: [60, 62, 65, 68, 72, 75],
                    borderColor: colors.success,
                    backgroundColor: 'rgba(46, 204, 113, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Digital Transformation',
                    data: [30, 38, 45, 52, 58, 65],
                    borderColor: colors.warning,
                    backgroundColor: 'rgba(241, 196, 15, 0.1)',
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Performance Trends & Projections',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });

    // Add interactive features
    addInteractiveFeatures();

    // Initialize mobile features
    initializeMobileNavigation();
    initializeTouchInteractions();
    optimizeChartsForMobile();
    initializeLazyLoading();

    // Handle window resize
    window.addEventListener('resize', () => {
        optimizeChartsForMobile();
    });

    // Update export button for mobile
    const exportButton = document.querySelector('.export-btn');
    if (exportButton) {
        if (window.innerWidth < 768) {
            exportButton.innerHTML = '<i class="fas fa-download"></i>';
        }
    }
});

function addInteractiveFeatures() {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effects to metric cards
    const metricCards = document.querySelectorAll('.metric-card');
    metricCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Add click-to-expand functionality for recommendation items
    const recommendationItems = document.querySelectorAll('.recommendation-item');
    recommendationItems.forEach(item => {
        item.addEventListener('click', function() {
            const description = this.querySelector('.recommendation-description');
            if (description.style.display === 'none') {
                description.style.display = 'block';
                this.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
            } else {
                description.style.display = 'none';
                this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }
        });
    });

    // Add progress bar animations
    const progressBars = document.querySelectorAll('.progress-fill');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 100);
            }
        });
    }, observerOptions);

    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });

    // Add data export functionality
    addExportFeatures();
}

function addExportFeatures() {
    // Create export button
    const exportButton = document.createElement('button');
    exportButton.innerHTML = '<i class="fas fa-download"></i> Export Dashboard';
    exportButton.className = 'export-btn';
    exportButton.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #3498db;
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 25px;
        cursor: pointer;
        font-weight: 600;
        box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
        z-index: 1000;
        transition: all 0.3s ease;
    `;

    exportButton.addEventListener('mouseenter', function() {
        this.style.background = '#2980b9';
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 6px 20px rgba(52, 152, 219, 0.4)';
    });

    exportButton.addEventListener('mouseleave', function() {
        this.style.background = '#3498db';
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 15px rgba(52, 152, 219, 0.3)';
    });

    exportButton.addEventListener('click', function() {
        window.print();
    });

    document.body.appendChild(exportButton);
}

// Mobile Navigation
function initializeMobileNavigation() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

    mobileNavToggle.addEventListener('click', () => {
        const icon = mobileNavToggle.querySelector('i');
        if (mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            document.body.style.overflow = '';
        } else {
            mobileNav.classList.add('active');
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            document.body.style.overflow = 'hidden';
        }
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            const icon = mobileNavToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            document.body.style.overflow = '';
        });
    });
}

// Touch interaction improvements
function initializeTouchInteractions() {
    const items = document.querySelectorAll('.recommendation-item, .segment-item, .metric-card');
    
    items.forEach(item => {
        item.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
            this.style.opacity = '0.9';
        }, { passive: true });

        item.addEventListener('touchend', function() {
            this.style.transform = '';
            this.style.opacity = '';
        }, { passive: true });
    });
}

// Chart.js mobile optimizations
function optimizeChartsForMobile() {
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
        Chart.defaults.font.size = 10;
        Chart.defaults.set('plugins.legend', {
            display: false
        });
    }
}

// Lazy loading for charts
function initializeLazyLoading() {
    const chartContainers = document.querySelectorAll('.chart-container');
    const observerOptions = {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const chart = entry.target.querySelector('canvas');
                if (chart && !chart.classList.contains('chart-loaded')) {
                    // Trigger chart initialization
                    chart.classList.add('chart-loaded');
                    // Your chart initialization code here
                }
            }
        });
    }, observerOptions);

    chartContainers.forEach(container => {
        observer.observe(container);
    });
}

// Utility functions for data manipulation
function formatNumber(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1) + 'B';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

function calculateGrowthRate(current, previous) {
    return ((current - previous) / previous * 100).toFixed(1);
}

// Real-time data simulation (for demo purposes)
function simulateRealTimeUpdates() {
    setInterval(() => {
        // Simulate small fluctuations in metrics
        const metricValues = document.querySelectorAll('.metric-value');
        metricValues.forEach(metric => {
            const currentValue = parseFloat(metric.textContent);
            if (!isNaN(currentValue)) {
                const fluctuation = (Math.random() - 0.5) * 0.1; // ±5% fluctuation
                const newValue = currentValue * (1 + fluctuation);
                metric.textContent = newValue.toFixed(1) + (metric.textContent.includes('%') ? '%' : '');
            }
        });
    }, 30000); // Update every 30 seconds
}

// Initialize real-time updates (commented out for static demo)
// simulateRealTimeUpdates();