from django.db import models

# Create your models here.
class Todo(models.Model):
    class Options(models.TextChoices): 
     OP = "OPEN","OPEN",
     WORK = "WORKING","WORKING",
     OVER = "OVERDUE","OVERDUE",
     COMPLETE = "COMPLETED","COMPLETED"

    
    id = models.AutoField(primary_key=True)
    
    Title = models.CharField(max_length=100)
    Description = models.TextField()
    Status = models.CharField(max_length=10,choices=Options.choices,default=Options.OP)
    CreatedAt = models.DateField(auto_now_add=True)
    Due = models.DateTimeField(blank=True,null=True)

    def __str__(self):
        return self.Title