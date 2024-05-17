from django.db import models
from django.contrib.auth.models import User

class MoodEntry(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    mood = models.CharField(max_length=50)
    journal_entry = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)



class JournalEntry(models.Model):
    entry = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.entry[:50]

   
