from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from .models import *
from .utils import getTaskDetail,getTasksList,createTask,updateTask,deleteTask



@api_view(['GET', 'POST'])
def getTasks(request):
    if request.method == 'GET':
        return getTasksList(request)
    if request.method == 'POST':
        return createTask(request)    

@api_view(['GET','PUT','DELETE'])
def getTask(request,pk):
    if request.method == 'GET':
        return getTaskDetail(request,pk)
    if request.method == 'PUT':
        return updateTask(request,pk)
    if request.method == 'DELETE':
        return deleteTask(request,pk)    