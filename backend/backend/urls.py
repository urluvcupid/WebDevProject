from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('app/', include('app.urls')),  # вот это подключает мои маршруты из app/urls.py
    path('app/auth/', include('djoser.urls')),
    path('app/auth/', include('djoser.urls.jwt')),
]
