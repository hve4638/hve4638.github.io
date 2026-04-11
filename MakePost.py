#!/usr/bin/env python3
import sys
import datetime

KST = datetime.timezone(datetime.timedelta(hours=9))


def create_markdown_file(filename):
    now = datetime.datetime.now(tz=KST)
    date_str = now.strftime('%Y-%m-%d %H:%M:%S')

    fullpath = f'src/content/blog/{filename}.md'
    with open(fullpath, 'w', encoding='utf-8') as f:
        f.write(f'''---
title:
date: {date_str} +0900
categories: []
tags: []
---
''')
    print(f'create file : ./{fullpath}')


if __name__ == '__main__':

    filename: str = ''
    try:
        if (len(sys.argv) < 2):
            filename = input('FILENAME (without Date) : ')
        else:
            filename = sys.argv[1]
    except KeyboardInterrupt:
        print("")
        exit()

    create_markdown_file(filename)
