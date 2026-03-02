# 🚀 Quick Start - Panel Admin React Móvil

## ⚡ Inicio Rápido (3 minutos)

### 1. Instalación
```bash
npm install
```

### 2. Ejecutar en Desarrollo
```bash
npm run dev
```

Abre http://localhost:5173

### 3. Desplegar a Vercel
```bash
npm install -g vercel  # Solo la primera vez
vercel                  # Desplegar
```

## 📱 Navegación del Panel

### Dashboard (/)
- **KPIs**: Total Users, Active Sessions, Revenue, Growth
- **Gráfico**: User Growth Chart
- **Feed**: Recent Activity

### Users (/users)
- **Crear**: Botón "Add User"
- **Editar**: Click en ícono de lápiz
- **Eliminar**: Click en ícono de basura
- **Buscar**: Campo de búsqueda en tiempo real

### Content (/content)
- **Vista**: Grid de tarjetas
- **Filtros**: Por categoría y estado

### Settings (/settings)
- **Perfil**: Datos personales
- **Sistema**: Configuración general
- **Seguridad**: Contraseñas
- **Apariencia**: Tema e idioma

## 🎨 Customización Rápida

### Cambiar Colores
Edita `src/index.css`:
```css
:root {
  --primary: 221.2 83.2% 53.3%;  /* Color principal */
  --secondary: 210 40% 96.1%;    /* Color secundario */
}
```

### Agregar Nueva Ruta
1. Crea página en `src/pages/MiPagina.tsx`
2. Agrega ruta en `src/App.tsx`:
```tsx
<Route path="/mi-pagina" element={<MiPagina />} />
```
3. Agrega al menú en `src/components/layout/Sidebar.tsx`

### Agregar API Endpoint
1. Crea archivo en `api/mi-endpoint/index.ts`:
```typescript
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  return res.status(200).json({ message: 'Hello' });
}
```
2. Usa desde frontend: `/api/mi-endpoint`

## 🔧 Comandos Útiles

```bash
# Desarrollo
npm run dev           # Server de desarrollo
npm run build         # Build para producción
npm run preview       # Preview del build

# Linting
npm run lint          # Ejecutar ESLint

# Deployment
vercel                # Deploy preview
vercel --prod         # Deploy a producción
vercel logs           # Ver logs
```

## 📂 Archivos Principales

```
src/
├── App.tsx                    # Router principal
├── main.tsx                   # Entry point
├── components/
│   ├── layout/Sidebar.tsx     # Menú de navegación
│   └── ui/                    # Componentes reutilizables
├── pages/
│   ├── Dashboard.tsx          # Página principal
│   └── Users.tsx              # CRUD de usuarios
└── lib/api.ts                 # Cliente API
```

## 🐛 Solución Rápida de Problemas

### Port 5173 ya en uso
```bash
# Linux/Mac
lsof -ti:5173 | xargs kill
# Windows
netstat -ano | findstr :5173
```

### Build falla
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### API no responde
1. Verifica `vercel.json` en la raíz
2. Confirma que las rutas API están en `/api`
3. Revisa los logs de Vercel

## 📊 Estructura de Datos

### User
```typescript
{
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'user';
  status: 'active' | 'inactive';
  createdAt: string;
}
```

### Dashboard Stats
```typescript
{
  totalUsers: number;
  activeSessions: number;
  revenue: number;
  growth: number;
}
```

## 🌐 URLs Después del Deploy

- **Preview**: `https://panel-admin-react-movil-xxx.vercel.app`
- **Production**: `https://panel-admin-react-movil.vercel.app`
- **API Health**: `/api/health`

## 📚 Recursos

- [README completo](README.md)
- [Guía de deployment](DEPLOYMENT.md)
- [Resumen del proyecto](PROJECT_SUMMARY.md)

## ✨ Features Listas para Usar

- ✅ Dashboard con métricas
- ✅ CRUD de usuarios completo
- ✅ Búsqueda en tiempo real
- ✅ Responsive (móvil y desktop)
- ✅ API serverless
- ✅ TypeScript strict mode
- ✅ Tailwind CSS
- ✅ Deploy con un comando

---

**¡Listo para empezar!** 🎉

Ejecuta `npm run dev` y visita http://localhost:5173
