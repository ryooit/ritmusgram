# -*- coding: utf-8 -*-
# Generated by Django 1.11.8 on 2018-01-23 22:17
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('images', '0006_auto_20180122_1733'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='image',
            options={'ordering': ['-created_at']},
        ),
    ]
