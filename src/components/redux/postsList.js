import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPost } from './postSlices';

const PostsList = () => {

    const post = useSelector( selectAllPost );
    const renserPost = post && post.map( ( item, index ) => (
        <Box key={ item.id }>
            <Stack direction="column" alignItems="start" spacing={ 2 }>
                <Typography variant='h5'>{ item.title }</Typography>
                <Typography variant='body1'>{ item.content }</Typography>
            </Stack>
        </Box>
    ) );

    return (
        <Box>
            <Typography variant='h4'>POSTS</Typography>
            { renserPost }
        </Box>
    );
};

export default PostsList;