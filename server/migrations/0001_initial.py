# Generated by Django 4.1.3 on 2022-11-22 06:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Title', models.CharField(max_length=100)),
                ('Description', models.CharField(max_length=100)),
                ('Status', models.CharField(max_length=10)),
                ('CreatedAt', models.DateTimeField(auto_now_add=True)),
                ('Due', models.DateTimeField(blank=True)),
            ],
        ),
    ]
