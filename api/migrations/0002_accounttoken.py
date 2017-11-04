# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-11-04 16:56
from __future__ import unicode_literals

import api.models
import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AccountToken',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('generated_at', models.DateTimeField(blank=True, default=datetime.datetime.now)),
                ('token_id', models.CharField(default=api.models.generate_token_id, max_length=4)),
                ('first_name', models.CharField(max_length=64)),
                ('last_name', models.CharField(max_length=64)),
                ('phone_number', models.CharField(max_length=64)),
            ],
        ),
    ]