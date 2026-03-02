# Panel Admin React Móvil

A modern, responsive admin panel built with React, TypeScript, and Vite, deployable on Vercel.

## 🚀 Features

- **Dashboard**: Real-time KPIs, analytics charts, and activity feed
- **User Management**: Complete CRUD operations for users with role-based access
- **Content Management**: Browse and manage content library
- **Settings**: Profile, system configuration, security, and appearance settings
- **Responsive Design**: Mobile-friendly layout with collapsible sidebar
- **API Integration**: Serverless functions on Vercel

## 📦 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui design patterns
- **Routing**: React Router v6
- **Charts**: Recharts
- **Icons**: Lucide React
- **Backend**: Vercel Serverless Functions
- **Deployment**: Vercel

## 🏗️ Project Structure

```
Panel_admin_react_movil/
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components (Card, Button, Input, Badge)
│   │   ├── layout/          # Layout components (Sidebar, Header, Layout)
│   │   └── dashboard/       # Dashboard-specific components
│   ├── pages/
│   │   ├── Dashboard.tsx    # Main dashboard with KPIs
│   │   ├── Users.tsx        # User management with CRUD
│   │   ├── Content.tsx      # Content library
│   │   └── Settings.tsx     # Settings page
│   ├── lib/
│   │   ├── api.ts          # API client utilities
│   │   └── utils.ts        # Helper functions
│   ├── types/              # TypeScript type definitions
│   ├── App.tsx             # Main app component with routing
│   └── main.tsx            # App entry point
├── api/
│   ├── users/
│   │   ├── index.ts        # GET all users
│   │   ├── [id].ts         # GET/PUT/DELETE user by id
│   │   └── create.ts       # POST new user
│   ├── analytics/
│   │   └── index.ts        # Dashboard analytics data
│   ├── content/
│   │   └── index.ts        # Content management
│   └── health.ts           # Health check endpoint
├── vercel.json             # Vercel configuration
├── .env.example            # Environment variables template
└── package.json
```

## 🛠️ Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Panel_admin_react_movil
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** at `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🌐 API Endpoints

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users/create` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Analytics
- `GET /api/analytics` - Get dashboard statistics and activity

### Content
- `GET /api/content` - Get all content
- `POST /api/content` - Create new content

### Health
- `GET /api/health` - API health check

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts** to link your project and deploy

### Option 2: Deploy via GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect the configuration
6. Click "Deploy"

### Environment Variables on Vercel

Set the following environment variable in your Vercel project settings:

- `VITE_API_URL` - Set to `/api` (or your custom API URL)

## 📱 Modules

### Dashboard
- **KPI Cards**: Total Users, Active Sessions, Revenue, Growth
- **User Growth Chart**: Line chart showing user trends
- **Activity Feed**: Recent system activities

### Users (CRUD)
- List all users with search functionality
- Create new users
- Edit existing users
- Delete users with confirmation
- Role management (Admin, Editor, User)
- Status badges (Active/Inactive)

### Content
- Content library grid view
- Category and status filtering
- Author information
- Publication status

### Settings
- **Profile Settings**: Update personal information
- **System Configuration**: API endpoint, timezone, notifications
- **Security**: Password management
- **Appearance**: Theme and language preferences

## 🎨 Customization

### Colors
Edit the CSS variables in `src/index.css` to customize the color scheme:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
  /* ... more variables */
}
```

### Components
All UI components are in `src/components/ui/` and can be customized to match your design system.

## 🔒 Security

- Environment variables are used for configuration
- API endpoints validate request methods
- User data is validated before processing
- CORS headers are configured in `vercel.json`

## 📄 License

MIT

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🐛 Issues

If you find any bugs or have feature requests, please create an issue on GitHub.

## 📞 Support

For questions or support, please contact the development team.

---

Built with ❤️ using React, TypeScript, and Vercel
