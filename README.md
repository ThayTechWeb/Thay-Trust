
# Thay Trust

Thay Trust is a web application dedicated to empowering lives through inclusive opportunities for people with disabilities. Our platform offers workshop internships and a dedicated matrimony service, creating a supportive community for individuals with diverse needs.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Features

- Workshop and internship programs for people with disabilities
- Matrimony service tailored for individuals with special needs
- Responsive design for seamless experience across devices
- Contact form for inquiries and support
- Testimonials and success stories showcase

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS
- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- pnpm (version 6 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/thay-trust.git
   cd thay-trust
   ```

2. Install dependencies:
   ```
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add any necessary environment variables.

4. Run the development server:
   ```
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
thay-trust/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── ...
├── components/
│   ├── ui/
│   │   └── ...
│   ├── Navbar.tsx
│   └── Footer.tsx
├── lib/
│   └── utils.ts
├── public/
│   └── ...
├── styles/
│   └── globals.css
├── .env.local
├── next.config.js
├── package.json
├── pnpm-lock.yaml
├── tailwind.config.js
└── tsconfig.json
```

## Usage

After starting the development server, you can:

- Customize the content in `app/page.tsx` and other page components
- Modify styles in `styles/globals.css` and component-specific styles
- Add new pages by creating new files in the `app` directory
- Utilize shadcn/ui components from the `components/ui` directory

## Customization

### Tailwind CSS

You can customize the Tailwind configuration in `tailwind.config.js`. This includes modifying the theme, adding new utilities, or configuring plugins.

### shadcn/ui Components

To add or customize shadcn/ui components:

1. Run the shadcn/ui CLI:
   ```
   pnpm dlx shadcn@latest add
   ```

2. Select the component you want to add
3. The component will be added to your `components/ui` directory, where you can customize it as needed

## Contributing

We welcome contributions to Thay Trust! Please read our contributing guidelines before submitting pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
