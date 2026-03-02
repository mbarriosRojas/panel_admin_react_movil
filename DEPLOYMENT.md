# Guía de Despliegue - Panel Admin React Móvil

## 🚀 Despliegue en Vercel

### Opción 1: Vercel CLI (Recomendado)

1. **Instalar Vercel CLI globalmente**:
   ```bash
   npm install -g vercel
   ```

2. **Autenticarse en Vercel**:
   ```bash
   vercel login
   ```

3. **Desplegar el proyecto**:
   ```bash
   vercel
   ```

4. **Seguir los prompts**:
   - ¿Set up and deploy? → Yes
   - ¿Which scope? → Selecciona tu cuenta/organización
   - ¿Link to existing project? → No
   - ¿What's your project's name? → panel-admin-react-movil
   - ¿In which directory is your code located? → ./
   - ¿Want to override settings? → No

5. **Desplegar a producción**:
   ```bash
   vercel --prod
   ```

### Opción 2: GitHub Integration

1. **Push a GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit: Panel Admin React"
   git push origin main
   ```

2. **Conectar con Vercel**:
   - Visita [vercel.com](https://vercel.com)
   - Click "New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente la configuración
   - Click "Deploy"

3. **Configuración automática**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Opción 3: Vercel Dashboard (Manual)

1. Comprime el proyecto en un archivo ZIP
2. Ve a [vercel.com/new](https://vercel.com/new)
3. Arrastra y suelta el archivo ZIP
4. Configura las variables de entorno si es necesario
5. Click "Deploy"

## 🔧 Variables de Entorno

Configura en Vercel Dashboard → Project Settings → Environment Variables:

| Variable | Valor | Descripción |
|----------|-------|-------------|
| `VITE_API_URL` | `/api` | URL base de la API |

## 📋 Pre-Despliegue Checklist

- [x] Build exitoso (`npm run build`)
- [x] Tests TypeScript pasando
- [x] `vercel.json` configurado
- [x] Variables de entorno definidas
- [x] `.gitignore` actualizado
- [x] README.md documentado
- [x] API endpoints funcionando

## 🌐 Después del Despliegue

### 1. Verificar el Deploy

Vercel te proporcionará:
- **URL de Preview**: `https://panel-admin-react-movil-xxx.vercel.app`
- **URL de Producción**: `https://panel-admin-react-movil.vercel.app`

### 2. Probar los Endpoints

```bash
# Health check
curl https://tu-proyecto.vercel.app/api/health

# Usuarios
curl https://tu-proyecto.vercel.app/api/users

# Analytics
curl https://tu-proyecto.vercel.app/api/analytics
```

### 3. Verificar la UI

Visita tu URL de Vercel y verifica:
- ✅ Dashboard carga correctamente
- ✅ Navegación entre páginas funciona
- ✅ Sidebar responsive en móvil
- ✅ Datos se cargan desde la API
- ✅ Formularios de usuarios funcionan

## 🔄 Deploys Automáticos

Con GitHub integration:
- **Push a `main`** → Deploy a producción
- **Push a otras ramas** → Deploy preview
- **Pull Requests** → Deploy preview automático

## 🛠️ Solución de Problemas

### Error: Build Failed

```bash
# Limpiar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Error: API No Responde

1. Verifica que `vercel.json` esté en la raíz
2. Confirma que los endpoints están en `/api`
3. Revisa los logs en Vercel Dashboard

### Error: Rutas 404

1. Verifica que `vercel.json` tenga los rewrites correctos
2. Asegúrate de que el `outputDirectory` sea `dist`

## 📊 Monitoreo Post-Despliegue

### Analytics de Vercel
- Visitas y tráfico
- Tiempo de respuesta de funciones
- Errores y logs

### Logs de Funciones Serverless
```bash
vercel logs [deployment-url]
```

## 🔐 Seguridad

### Recomendaciones:
1. Configura dominios personalizados con SSL
2. Implementa autenticación (JWT, OAuth)
3. Agrega rate limiting a las APIs
4. Configura CORS apropiadamente
5. Usa variables de entorno para secretos

## 📈 Optimizaciones Post-Despliegue

1. **Code Splitting**: Implementar lazy loading
   ```tsx
   const Dashboard = lazy(() => import('./pages/Dashboard'));
   ```

2. **CDN**: Vercel automáticamente usa CDN global

3. **Cache**: Configurar headers de cache en `vercel.json`

4. **Compresión**: Habilitada por defecto en Vercel

## 🔗 Recursos Útiles

- [Documentación Vercel](https://vercel.com/docs)
- [Vercel CLI Docs](https://vercel.com/docs/cli)
- [Deployment API](https://vercel.com/docs/rest-api)
- [Serverless Functions](https://vercel.com/docs/serverless-functions/introduction)

## 📞 Soporte

- Discord de Vercel: [vercel.com/discord](https://vercel.com/discord)
- GitHub Discussions: Abre un issue en el repositorio
- Documentación oficial: [vercel.com/docs](https://vercel.com/docs)

---

**¡Listo para desplegar!** 🎉

Ejecuta `vercel` en tu terminal para comenzar.
