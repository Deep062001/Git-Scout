import React from 'react';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useSelector } from 'react-redux';
import './RepoCard.scss';

const RepoCard = (props) => {
    const isDark = useSelector((state) => state.switchMode);
    return (
        <div className={`repocard ${isDark ? "repocard-drk" : "repocard-lgt"}`}>
            <p className='reponame'>{props.repo.name}</p>
            <p className='description'>{props.repo.description}</p>
            <div className='info-div'>
                {
                    props.repo.language && <div className='icon-div'>
                        <FiberManualRecordIcon className='info-icon' />
                        <p>{props.repo.language}</p>
                    </div>
                }
                <div className='icon-div'>
                    <ForkRightIcon className='info-icon' />
                    <p>{props.repo.forks_count}</p>
                </div>
                <div className='icon-div'>
                    <VisibilityOutlinedIcon className='info-icon' />
                    <p>{props.repo.watchers}</p>
                </div>
            </div>
        </div>
    )
}

export default RepoCard