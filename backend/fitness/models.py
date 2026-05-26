from django.db import models

class FitnessRecord(models.Model):
    age = models.IntegerField()
    weight = models.FloatField()
    height = models.FloatField()
    workout_duration = models.IntegerField()
    calories_burned = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Fitness Record {self.id}"