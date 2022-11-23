from rest_framework.response import Response

from .models import Todo
from .serializers import TodoSerializer

def getTasksList(request):
    tasks = Todo.objects.all().order_by('-CreatedAt')
    serializer = TodoSerializer(tasks,many=True)
    return Response(serializer.data)

def getTaskDetail(request,pk):
    task = Todo.objects.get(id=pk)
    serializer = TodoSerializer(task,many=False)
    return Response(serializer.data)


def createTask(request):
    data = request.data
    task = Todo.objects.create(
        Title = data['Title'],
        Description = data['Description'],
        Status = data['Status'],
    )     
    serializer = TodoSerializer(task,many=False)
    return Response(serializer.data)

def updateTask(request,pk):
    data = request.data
    task = Todo.objects.get(id=pk)
    serializer = TodoSerializer(instance=task,data=data)
    if serializer.is_valid():
        serializer.save()
    
    

    return Response(serializer.data)

def deleteTask(request,pk):
    task = Todo.objects.get(id=pk)
    task.delete()
    return Response('Deleted')