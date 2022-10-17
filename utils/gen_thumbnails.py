import subprocess
import os
import fnmatch


for root, dirnames, filenames in os.walk('assets'):
    for filename in fnmatch.filter(filenames, '*.mp4'):
        video_name = os.path.abspath(root + '\\' + filename)
        thumbnail_name = os.path.abspath(root) + '\\' + filename.split('.')[0] + '-thumbnail.jpg'
        subprocess.call(['ffmpeg', '-i', video_name, '-ss', '00:00:00.000', '-vframes', '1',  thumbnail_name])