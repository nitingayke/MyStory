import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';

import { Share, ThumbUpOffAlt, ChatBubbleOutline } from '@mui/icons-material';

export default function PrintStories({ stories }) {
    return (
        <>
            {stories?.length > 0 && stories.map((story, idx) => (
                <Card key={idx}>
                    <CardActionArea sx={{ flex: 1 }}>
                        <div
                            style={{
                                height: "220px",
                                backgroundImage: `url(${story?.media || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeDgn7FWl_Rzf6rC1ynbp_wC371zX6f64mlw&s"})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            alt={story?.title || "Story Image"}
                        ></div>

                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography className='text-gray-700' gutterBottom variant="h5" component="div">
                                {story?.title || "Story Title"}
                            </Typography>
                            <Typography className='line-clamp-3 h-15' variant="body2" sx={{ color: 'text.secondary' }}>
                                {story?.contentOverview || "Story overview goes here."}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <div className='flex items-center justify-between bg-dark-500 pt-0 p-2'>
                        <Button className='flex items-center' size="small" >
                            <ThumbUpOffAlt style={{ fontSize: "1.2rem", color: "gray" }} />
                            <span className='ps-2 font-light text-lg text-gray-400'>{(story?.likes || []).length}</span>
                        </Button>
                        <Button className='flex items-center' size="small" >
                            <ChatBubbleOutline style={{ fontSize: "1.2rem", color: "gray" }} />
                            <span className='ps-2 font-light text-lg text-gray-400'>{(story?.comments || []).length}</span>
                        </Button>
                        <Button className='flex items-center' size="small" >
                            <Share style={{ fontSize: "1.2rem", color: "gray" }} />
                            <span className='ps-2 font-light text-lg text-gray-400'>{(story?.shares || []).length}</span>
                        </Button>
                    </div>
                </Card>
            ))}
        </>
    );
}
