# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-11-04 20:40
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20171104_1505'),
    ]

    operations = [
        migrations.AlterField(
            model_name='person',
            name='person_type',
            field=models.CharField(choices=[('2', 'COACH'), ('1', 'YOUTH')], default='1', max_length=1),
        ),
    ]
