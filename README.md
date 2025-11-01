# Library Book Recommender System

A lightweight, browser-based book recommendation system built with React, Vite, and Chart.js. The application helps users discover books based on their reading preferences using a weighted matching algorithm.

## Features

- **Smart Recommendations**: Uses weighted scoring algorithm (Genre: 40%, Tone: 30%, Series: 20%, Author: 10%)
- **Interactive Filters**: Filter by genre, tone, series preference, and author
- **Visual Analytics**: Chart.js visualization showing recommendation scores
- **Persistent Preferences**: Saves user preferences using localStorage
- **Export Functionality**: Export recommendations as JSON or formatted text
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **10 Diverse Books**: Synthetic dataset across 6 genres (sci-fi, horror, fantasy, romance, historical fiction, realistic fiction)

## Tech Stack

- **Frontend**: React 18 with Hooks
- **Build Tool**: Vite (fast HMR and optimized builds)
- **Visualization**: Chart.js with react-chartjs-2
- **Styling**: Custom CSS with responsive design
- **Data Persistence**: localStorage API

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd library-book-recommender

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

## Usage

1. **Set Your Preferences**: Use the dropdowns and text field to specify your reading preferences:
   - Genre (sci-fi, horror, fantasy, romance, historical fiction, realistic fiction)
   - Tone (suspenseful, dark, epic, lighthearted, dramatic, emotional, etc.)
   - Series preference (all books, standalone only, or specific series)
   - Author name (partial match supported)

2. **View Recommendations**: Books are automatically ranked by match score
   - Color-coded scores: Green (80%+), Orange (60-79%), Red (<60%)
   - Detailed book cards with all metadata
   - Interactive bar chart showing top recommendations

3. **Export Results**: Save your recommendations
   - JSON format: Structured data for further analysis
   - Text format: Readable report with full details

## Project Structure

```
library-book-recommender/
├── src/
│   ├── components/
│   │   ├── PreferenceForm.jsx      # User preference input
│   │   ├── BookCard.jsx            # Individual book display
│   │   ├── ScoreChart.jsx          # Chart.js visualization
│   │   └── ExportButton.jsx        # Export functionality
│   ├── data/
│   │   └── mockBooks.js            # Synthetic book dataset
│   ├── utils/
│   │   ├── recommendationEngine.js # Scoring algorithm
│   │   └── storage.js              # localStorage utilities
│   ├── App.jsx                     # Main application
│   ├── App.css                     # Application styles
│   └── main.jsx                    # Entry point
├── package.json
└── README.md
```

## Recommendation Algorithm

The system uses a simple weighted matching algorithm:

- **Genre Match**: 40% weight - Exact genre match
- **Tone Match**: 30% weight - Exact tone match
- **Series Match**: 20% weight - Series preference alignment
- **Author Match**: 10% weight - Partial name match

Books receive partial credit (50%) for unspecified preferences, ensuring all books get scored even with minimal input.

## Mock Data

The application includes 10 diverse books:

- **Sci-Fi**: "The Quantum Paradox", "Starship Rebellion"
- **Horror**: "Whispers in the Dark", "The Midnight Garden"
- **Fantasy**: "The Dragon's Legacy"
- **Romance**: "Summer Hearts", "Second Chances"
- **Historical Fiction**: "Echoes of Empire", "Crown of Thorns"
- **Realistic Fiction**: "The Suburban Secret"

## Browser Compatibility

- Chrome/Edge (90+)
- Firefox (88+)
- Safari (14+)

## Future Enhancements

- Add more sophisticated recommendation algorithms (collaborative filtering, content-based)
- Expand book database
- User accounts and reading history
- Social features (share recommendations, reviews)
- Advanced filters (rating, page count, publication year)

## License

This is a demonstration project created for educational purposes.
