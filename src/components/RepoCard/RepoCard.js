import React from 'react';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './RepoCard.scss';

const RepoCard = () => {
    return (
        <div className='repocard repocard-drk'>
            <p className='reponame'>Repository Name</p>
            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
            <div className='info-div'>
                <div className='icon-div'>
                    <FiberManualRecordIcon className='info-icon' />
                    <p>Language</p>
                </div>
                <div className='icon-div'>
                    <ForkRightIcon className='info-icon' />
                    <p>Forks</p>
                </div>
                <div className='icon-div'>
                    <VisibilityOutlinedIcon className='info-icon' />
                    <p>Watchers</p>
                </div>
            </div>
        </div>
    )
}

export default RepoCard