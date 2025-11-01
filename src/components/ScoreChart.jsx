import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './ScoreChart.css';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ScoreChart = ({ books, limit = 10 }) => {
  // Get top books by score
  const topBooks = books.slice(0, limit);

  const data = {
    labels: topBooks.map((book) => book.title),
    datasets: [
      {
        label: 'Match Score (%)',
        data: topBooks.map((book) => book.score),
        backgroundColor: topBooks.map((book) => {
          const score = book.score;
          if (score >= 80) return 'rgba(46, 204, 113, 0.8)';
          if (score >= 60) return 'rgba(243, 156, 18, 0.8)';
          if (score >= 40) return 'rgba(230, 126, 34, 0.8)';
          return 'rgba(231, 76, 60, 0.8)';
        }),
        borderColor: topBooks.map((book) => {
          const score = book.score;
          if (score >= 80) return 'rgba(46, 204, 113, 1)';
          if (score >= 60) return 'rgba(243, 156, 18, 1)';
          if (score >= 40) return 'rgba(230, 126, 34, 1)';
          return 'rgba(231, 76, 60, 1)';
        }),
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Book Recommendation Scores',
        font: {
          size: 18,
          weight: 'bold',
        },
        color: '#2c3e50',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Match Score: ${context.parsed.y.toFixed(1)}%`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + '%';
          },
        },
        title: {
          display: true,
          text: 'Match Score',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
      x: {
        ticks: {
          maxRotation: 45,
          minRotation: 45,
        },
      },
    },
  };

  return (
    <div className="score-chart-container">
      <div className="chart-wrapper">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ScoreChart;
