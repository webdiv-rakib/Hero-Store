# 🦸‍♂️ Hero IO — Modern App Store Simulation

**Hero IO** is a fully responsive, front-end web application that simulates a modern App Store experience. Users can browse a curated list of applications, search for specific apps, view detailed analytics including review charts, and manage their personal app installations using local browser storage.

🌍 **Live Demo:** [Insert Your Deployment Link Here]

---

## ✨ Key Features

* **🏠 Dynamic Home Dashboard:** Displays a hero banner and a curated list of the top 8 highest-rated applications.
* **🔍 Live Search Functionality:** A real-time, case-insensitive search bar on the "All Apps" page to quickly filter through the application database. Includes a custom "Not Found" state.
* **📊 Interactive Data Visualization:** Utilizes Recharts to display a responsive horizontal bar chart visualizing the breakdown of 1 to 5-star user reviews for each app.
* **💾 Local Storage Integration:** Users can "Install" and "Uninstall" apps. This data persists across browser reloads using `localStorage`. 
* **🗂️ Sorting & Filtering:** The "My Installations" page allows users to sort their installed apps by download count (High-to-Low and Low-to-High).
* **⚡ Seamless UX/UI:** * Features global loading spinners (using `react-loader-spinner`) during page navigation and search debouncing.
  * Interactive toast notifications (`react-toastify`) for install/uninstall actions.
  * Fully responsive design using TailwindCSS and DaisyUI for mobile, tablet, and desktop views.
* **🚧 Custom Error Handling:** A dedicated 404 page for invalid routes with a functional "Go Back" navigation button.

---

## 🛠️ Technologies Used

This project was built using the following modern web technologies:

* **Core:** React.js, JavaScript (ES6+), HTML5
* **Routing:** React Router DOM (v6+)
* **Styling:** Tailwind CSS, DaisyUI
* **Data Visualization:** Recharts
* **Notifications:** React-Toastify
* **Animations/Loaders:** React-Loader-Spinner
* **Icons:** React Icons

---
## 📂 Data Architecture
{
  "id": 1,
  "title": "CodeCraft Mobile",
  "companyName": "DevStudio Pro",
  "image": "[https://picsum.photos/](https://picsum.photos/)...",
  "description": "App description here...",
  "size": 45.2,
  "reviews": 12450,
  "ratingAvg": 4.8,
  "downloads": 1500000,
  "ratings": [
    { "name": "1 star", "count": 250 },
    { "name": "2 star", "count": 100 },
    ...
  ]
}

## 🚀 Getting Started (Local Development)

To run this project locally on your machine, follow these steps:

### 1. Clone the repository
```bash
git clone [https://github.com/your-username/hero-io.git](https://github.com/your-username/hero-io.git)
cd hero-io
npm install
npm run dev
