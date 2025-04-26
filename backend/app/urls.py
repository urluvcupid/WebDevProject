from django.urls import path
from .views import hello, product_list, ProductDetail, OrderView, create_review, LoginView, LogoutView

# urlpatterns = [
#     path('hello/', hello),
# ]

urlpatterns = [
    path('products/', product_list, name='product-list'),
    path('products/<int:pk>/', ProductDetail.as_view(), name='product-detail'),
    path('orders/', OrderView.as_view(), name='order-list'),
    path('reviews/', create_review, name='create-review'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout')
]