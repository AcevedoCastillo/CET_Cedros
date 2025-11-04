// ============================================
// SERVIDOR NODE.JS PARA ENVÍO DE CORREOS
// ============================================

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ============================================
// CONFIGURACIÓN DE GMAIL
// ============================================
// IMPORTANTE: Reemplaza estos valores con tus credenciales
require('dotenv').config();
const GMAIL_USER = process.env.GMAIL_USER;  // ← CAMBIAR AQUÍ
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;  // ← CAMBIAR AQUÍ

// Configurar transporter de nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD
    }
});

// Verificar conexión
transporter.verify(function(error, success) {
    if (error) {
        console.log('❌ Error al conectar con Gmail:', error);
    } else {
        console.log('✅ Servidor listo para enviar correos');
    }
});

// ============================================
// ENDPOINT PARA ENVIAR CORREO DE CONFIRMACIÓN
// ============================================
app.post('/api/send-confirmation', async (req, res) => {
    try {
        const {
            orderNumber,
            producto,
            precio,
            email,
            nombre,
            direccion,
            cardNumber
        } = req.body;

        // Validar datos requeridos
        if (!email || !producto || !precio || !orderNumber) {
            return res.status(400).json({
                success: false,
                message: 'Faltan datos requeridos'
            });
        }

        // Ocultar los últimos 4 dígitos de la tarjeta
        const lastFourDigits = cardNumber ? cardNumber.slice(-4) : 'XXXX';

        // Fecha actual
        const fecha = new Date().toLocaleDateString('es-SV', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        // HTML del correo
        const htmlContent = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
        }
        .content {
            background: #f9f9f9;
            padding: 30px;
            border: 1px solid #ddd;
        }
        .order-box {
            background: white;
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .order-number {
            font-size: 24px;
            font-weight: bold;
            color: #8B4513;
            text-align: center;
            margin: 20px 0;
        }
        .product-details {
            border-top: 2px solid #8B4513;
            padding-top: 20px;
            margin-top: 20px;
        }
        .detail-row {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #eee;
        }
        .detail-row:last-child {
            border-bottom: none;
            font-weight: bold;
            font-size: 18px;
            color: #8B4513;
        }
        .success-icon {
            font-size: 60px;
            text-align: center;
            color: #28a745;
            margin: 20px 0;
        }
        .footer {
            text-align: center;
            padding: 20px;
            color: #666;
            font-size: 12px;
            background: #f0f0f0;
            border-radius: 0 0 10px 10px;
        }
        .btn {
            display: inline-block;
            background: #8B4513;
            color: white;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 5px;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🪵 Cedros Nahuizalqueños</h1>
        <p>Muebles Artesanales de Madera</p>
    </div>
    
    <div class="content">
        <div class="success-icon">✅</div>
        
        <h2 style="text-align: center; color: #28a745;">¡Pedido Confirmado!</h2>
        
        <p>Estimado/a <strong>${nombre || 'Cliente'}</strong>,</p>
        
        <p>¡Gracias por tu compra! Hemos recibido tu pedido exitosamente y estamos comenzando a prepararlo.</p>
        
        <div class="order-number">
            Orden #CN-${orderNumber}
        </div>
        
        <div class="order-box">
            <h3 style="color: #8B4513; margin-top: 0;">Detalles de tu Pedido</h3>
            
            <div class="product-details">
                <div class="detail-row">
                    <span>Producto:</span>
                    <span><strong>${producto}</strong></span>
                </div>
                <div class="detail-row">
                    <span>Cantidad:</span>
                    <span>1 unidad</span>
                </div>
                <div class="detail-row">
                    <span>Precio:</span>
                    <span>$${precio}.00</span>
                </div>
                <div class="detail-row">
                    <span>Envío:</span>
                    <span class="text-success">GRATIS</span>
                </div>
                <div class="detail-row">
                    <span>Total Pagado:</span>
                    <span>$${precio}.00</span>
                </div>
            </div>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
                <div class="detail-row" style="border: none;">
                    <span>Método de pago:</span>
                    <span>Tarjeta •••• ${lastFourDigits}</span>
                </div>
                <div class="detail-row" style="border: none;">
                    <span>Fecha:</span>
                    <span>${fecha}</span>
                </div>
                <div class="detail-row" style="border: none;">
                    <span>Dirección de envío:</span>
                    <span>${direccion || 'Por confirmar'}</span>
                </div>
            </div>
        </div>
        
        <h3 style="color: #8B4513;">¿Qué sigue?</h3>
        <ul>
            <li>📦 Comenzaremos a fabricar tu mueble artesanal</li>
            <li>⏱️ Tiempo estimado de fabricación: 2-4 semanas</li>
            <li>🚚 Te notificaremos cuando esté listo para envío</li>
            <li>📞 Nos pondremos en contacto contigo para coordinar la entrega</li>
        </ul>
        
        <div style="text-align: center;">
            <a href="https://wa.me/503XXXXXXXX" class="btn">📱 Contáctanos por WhatsApp</a>
        </div>
        
        <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <strong>💡 Nota:</strong> Puedes personalizar tu mueble sin costo adicional. 
            Contáctanos si deseas hacer algún cambio en colores, tapizado o acabados.
        </div>
        
        <p>Si tienes alguna pregunta sobre tu pedido, no dudes en contactarnos:</p>
        <ul style="list-style: none; padding: 0;">
            <li>📧 Email: info@cedrosnahuizalquenos.com</li>
            <li>📱 WhatsApp: +503 XXXX-XXXX</li>
            <li>📞 Teléfono: +503 XXXX-XXXX</li>
        </ul>
        
        <p style="margin-top: 30px;">¡Gracias por confiar en Cedros Nahuizalqueños!</p>
        <p><strong>Equipo Cedros Nahuizalqueños</strong><br>
        <em>"Creando espacios únicos desde 2020"</em></p>
    </div>
    
    <div class="footer">
        <p><strong>Cedros Nahuizalqueños, S.A. de C.V.</strong></p>
        <p>Nahuizalco, Sonsonate, El Salvador</p>
        <p>© 2025 Cedros Nahuizalqueños. Todos los derechos reservados.</p>
        <p style="margin-top: 10px; font-size: 11px; color: #999;">
            Este correo fue enviado a ${email}. Si no realizaste esta compra, por favor contáctanos inmediatamente.
        </p>
    </div>
</body>
</html>
        `;

        // Configurar opciones del correo
        const mailOptions = {
            from: `"Cedros Nahuizalqueños" <${GMAIL_USER}>`,
            to: email,
            subject: `✅ Confirmación de Pedido #CN-${orderNumber} - Cedros Nahuizalqueños`,
            html: htmlContent,
            text: `
Confirmación de Pedido - Cedros Nahuizalqueños

¡Gracias por tu compra!

Número de Orden: #CN-${orderNumber}
Producto: ${producto}
Precio: $${precio}.00
Fecha: ${fecha}

Dirección de envío: ${direccion}

Tu mueble artesanal será fabricado especialmente para ti.
Tiempo estimado: 2-4 semanas.

Nos pondremos en contacto contigo pronto.

Saludos,
Equipo Cedros Nahuizalqueños
            `.trim()
        };

        // Enviar correo
        const info = await transporter.sendMail(mailOptions);

        console.log('✅ Correo enviado:', info.messageId);
        console.log('📧 Para:', email);

        // Respuesta exitosa
        res.json({
            success: true,
            message: 'Correo enviado exitosamente',
            messageId: info.messageId,
            orderNumber: orderNumber
        });

    } catch (error) {
        console.error('❌ Error al enviar correo:', error);
        res.status(500).json({
            success: false,
            message: 'Error al enviar correo',
            error: error.message
        });
    }
});

// ============================================
// ENDPOINT DE PRUEBA
// ============================================
app.get('/api/test', (req, res) => {
    res.json({
        success: true,
        message: 'Servidor funcionando correctamente',
        timestamp: new Date().toISOString()
    });
});

// ============================================
// INICIAR SERVIDOR
// ============================================
app.listen(PORT, () => {
    console.log('='.repeat(50));
    console.log('🪵 Servidor Cedros Nahuizalqueños');
    console.log('='.repeat(50));
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
    console.log(`📧 Gmail: ${GMAIL_USER}`);
    console.log(`🔗 Endpoint: http://localhost:${PORT}/api/send-confirmation`);
    console.log('='.repeat(50));
});

// Manejo de errores
process.on('unhandledRejection', (error) => {
    console.error('❌ Error no manejado:', error);
});
