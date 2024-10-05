
# 🌾 KumarFertilizer - E-commerce Platform for Fertilizers

Welcome to **KumarFertilizer**, your premier destination for all your fertilizer needs. Designed to offer a seamless and user-friendly shopping experience, KumarFertilizer provides dedicated product pages, secure authentication, and integrated payment gateways for hassle-free transactions.

## ✨ Features

- **Secure Authentication**: Powered by Firebase Authentication for safe and easy login/signup.
- **Product Pages**: Detailed product pages for different types of fertilizers, helping users explore and choose easily.
- **Payment Integration**: Secure transaction processing using Stripe payment gateway.
- **Responsive Design**: Fully responsive layout for smooth user experience across all devices.
- **Nodemailer Integration**: Automated email notifications for order confirmations and important updates.
- **Redux Toolkit**: Efficient state management to keep the app fast and maintainable.
- **Firebase Firestore**: Real-time database for storing user, product, and order details.
- **Material-UI**: A modern UI framework for a visually appealing and intuitive user interface.

## 🛠️ Technologies Used

- **Frontend**: React.js, Material-UI, React Hooks, React Icons
- **Backend**: Node.js, Express.js
- **Authentication**: Firebase Authentication
- **Database**: Firebase Firestore
- **State Management**: Redux Toolkit
- **Payment Processing**: Stripe
- **Email Notifications**: Nodemailer
- **Deployment**: Netlify

## 🚀 Getting Started

Follow these steps to get the project running locally:

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js**
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/kumar-fertilizer.git
   ```

2. Navigate to the project directory:

   ```bash
   cd kumar-fertilizer
   ```

3. Install the necessary dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables by creating a `.env` file in the root directory and adding your Firebase, Stripe, and Nodemailer configuration:

   ```bash
   REACT_APP_API_KEY=your-firebase-api-key
   REACT_APP_AUTH_DOMAIN=your-firebase-auth-domain
   REACT_APP_PROJECT_ID=your-firebase-project-id
   REACT_APP_STORAGE_BUCKET=your-firebase-storage-bucket
   REACT_APP_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
   REACT_APP_APP_ID=your-firebase-app-id
   STRIPE_PUBLIC_KEY=your-stripe-public-key
   STRIPE_SECRET_KEY=your-stripe-secret-key
   NODEMAILER_EMAIL=your-email-address
   NODEMAILER_PASSWORD=your-email-password
   ```

5. Start the development server:

   ```bash
   npm start
   ```

   The project should now be running on [http://localhost:3000](http://localhost:3000).

## 🌍 Deployment

To deploy **KumarFertilizer** on Netlify, follow these steps:

1. Go to [Netlify](https://www.netlify.com/) and sign in.
2. Create a new site and connect your GitHub repository.
3. Netlify will automatically build and deploy your project from the main branch.

## 🗂️ Project Structure

```bash
.
├── public
├── src
│   ├── components  # Reusable UI components
│   ├── pages       # Pages for fertilizers, checkout, etc.
│   ├── redux       # Redux slices and store configuration
│   ├── services    # Firebase, Stripe, and Nodemailer services
│   ├── App.js      # Main application component
│   └── index.js    # Entry point of the app
└── package.json
```

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed explanation of the changes.

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

## 📬 Contact

For questions or feedback, feel free to reach out:

- **Email**: priyanshumth0808@gmail.com
