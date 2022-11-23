from django.urls import path
from . import views 

urlpatterns = [
    path('tasks/',views.getTasks,name='tasks'),
    path('task/<str:pk>/',views.getTask,name='task')
]