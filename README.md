# E-Cell IIITV Website

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black)
![Node](https://img.shields.io/badge/Node-v20.15.0-green)

A modern web platform showcasing the Entrepreneurship Cell of IIIT Vadodara. This project demonstrates the structure, achievements, and initiatives of IIITV's E-Cell, providing comprehensive information about our organization's past projects, successful startups, and various wings.

## 🌐 Live Demo

Experience the live version of the website deployed on Vercel: [E-Cell IIITV Website](https://iiitv-ecell-hm8o6voy5-dhwananbt1-gmailcoms-projects.vercel.app/)

The deployment is automatically updated with the latest changes from the main branch, ensuring you always see the most recent version of our platform. Feel free to explore the various sections and features we've implemented.

## 🚀 Features

- **Interactive UI Components**: Built with Framer Motion and MUI for smooth animations and modern design
- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **Dynamic Content**: Showcases organization structure, past projects, and startups
- **Contact System**: Integrated email service for direct communication
- **Wings Information**: Detailed sections about different organizational wings
- **Project Showcase**: Interactive cards and modals for project presentation
- **Testimonials**: Dynamic testimonial display with Slick Carousel

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.5
- **Styling**: 
  - Tailwind CSS
  - Material-UI
  - Emotion
- **Animations**: Framer Motion
- **State Management**: React 18.3.1
- **Email Integration**: EmailJS
- **TypeScript**: For type safety
- **Additional Libraries**:
  - react-slick
  - simplex-noise
  - clsx & tailwind-merge for class management

## 📁 Project Structure

```
EcellWeb/
├── app/                    # Next.js application files
│   ├── wings-details/     # Wing-specific pages
│   ├── components/        # Reusable UI components
│   └── ...               # Other app-related files
├── data/                  # Static data files
├── public/               # Public assets
└── utils/                # Utility functions
```

## 🚀 Getting Started

You can use any of the following package managers to set up the project. Choose the one you're most comfortable with:

### Using npm

1. **Clone the repository**
   ```bash
   git clone https://github.com/[your-username]/EcellWeb.git
   cd EcellWeb
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

### Using Yarn

1. **Clone and enter the project directory**
   ```bash
   git clone https://github.com/[your-username]/EcellWeb.git
   cd EcellWeb
   ```

2. **Install Yarn if you haven't already**
   ```bash
   npm install -g yarn
   ```

3. **Install dependencies**
   ```bash
   yarn install
   ```

4. **Run the development server**
   ```bash
   yarn dev
   ```

### Using pnpm

1. **Clone the repository**
   ```bash
   git clone https://github.com/[your-username]/EcellWeb.git
   cd EcellWeb
   ```

2. **Install pnpm if you haven't already**
   ```bash
   npm install -g pnpm
   ```

3. **Install dependencies**
   ```bash
   pnpm install
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

### Using Bun

1. **Clone the repository**
   ```bash
   git clone https://github.com/[your-username]/EcellWeb.git
   cd EcellWeb
   ```

2. **Install Bun if you haven't already**
   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

3. **Install dependencies**
   ```bash
   bun install
   ```

4. **Run the development server**
   ```bash
   bun dev
   ```

For all package managers, once the development server is running, open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Additional Setup Notes

- Node.js version 20.15.0 or higher is recommended
- Make sure you have Git installed on your system
- The development server typically takes a few seconds to start up
- You may need to install additional global dependencies depending on your system

## 🧩 Components

The project includes several key components:

- `FloatingNav`: Navigation bar with smooth animations
- `Hero`: Landing page hero section
- `Wings`: Organization structure display
- `ProjectCard/Modal`: Interactive project showcases
- `StartupCard`: Startup showcase component
- `ContactUs`: Email integration form
- And many more specialized components for different sections

## 📄 License

This project is licensed under the GNU Affero General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

While this project is currently a developer's perspective of IIITV's E-Cell, contributions are welcome. Please feel free to submit issues and pull requests.

## ✨ Acknowledgments

- IIIT Vadodara
- All contributors and supporters

## 📬 Contact

For any queries regarding the website, please reach out through the contact form on the website or create an issue in this repository.

---
⭐ Don't forget to star the repository if you find it useful!
