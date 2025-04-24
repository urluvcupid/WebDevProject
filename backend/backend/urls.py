from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('app.urls')),  # вот это подключает мои маршруты из app/urls.py
]
