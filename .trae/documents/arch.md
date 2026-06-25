## 1. Architecture Design

```mermaid
graph TD
  A["Frontend (React + Vite + Tailwind CSS)"] --> B["Home Page Components"]
  B --> C["Hero Section"]
  B --> D["About Section"]
  B --> E["Facilities Gallery"]
  B --> F["Services Cards"]
  B --> G["Trainers Section"]
  B --> H["Pricing Cards"]
  B --> I["Timings Section"]
  B --> J["Transformation Gallery"]
  B --> K["Testimonials"]
  B --> L["Contact Section"]
  B --> M["Footer"]
```

## 2. Technology Description
- **Frontend**: React@18 + Tailwind CSS@3 + Vite
- **Initialization Tool**: Vite (npm create vite@latest)
- **Backend**: None (static website)
- **Database**: None (mock data for demo)

## 3. Route Definitions
| Route | Purpose |
|-------|---------|
| / | Home page with all sections |

## 4. File Structure
```
/
├── public/
│   └── images/          # User-provided gym images
├── src/
│   ├── components/      # Reusable UI components
│   ├── sections/        # Page sections
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── package.json
├── vite.config.js
└── tailwind.config.js
```
