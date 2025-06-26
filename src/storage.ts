import fs from 'fs'; // To read/write files on your computer
import path from 'path'; // To work with file paths nicely

const filePath = path.resolve(__dirname, '../data/lastChallenge.json');

interface StoredChallenge{
    date: string;
    challenge: string;
}