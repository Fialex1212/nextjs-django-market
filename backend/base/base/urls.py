from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include("users.urls")),
    path('api/cart/', include("cart.urls")),
    path('api/products/', include("products.urls")),
    path('api/reviews/', include("reviews.urls")),
    path('api/email/', include('email_sender.urls'))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)