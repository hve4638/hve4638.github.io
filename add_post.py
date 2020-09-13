#-*- coding: utf-8 -*-
import time
import os
import re

def post_create(name, title, category):
    if category == "": category = "etc"
    
    if name == "": name = title
        
    name = re.sub('\W', '', name)
    
    now = time.localtime()
    fname = '{:0>4}-{:0>2}-{:0>2}-{}.md'.format(now.tm_year, now.tm_mon, now.tm_mday, name)
    
    
    with open(fname, 'w', -1, 'utf-8') as f:
        f.write('---\n')
        f.write(f'title: {title}\n')
        f.write('date: {:0>4}-{:0>2}-{:0>2} {:0>2}:{:0>2}:{:0>2} -0400\n'.format(now.tm_year, now.tm_mon, now.tm_mday, now.tm_hour, now.tm_min, now.tm_sec))
        f.write(f'categories: {category}\n')
        f.write('---\n')

title    = input("Title     >> ")
name     = input("file name >> ")
category = input("Category  >> ")

post_create(name, title, category)
