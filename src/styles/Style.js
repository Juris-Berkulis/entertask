import { makeStyles } from '@material-ui/styles';
// import { styleConsts } from './StyleConsts';

export const useStyles = makeStyles({
  center: {
    padding: '0 calc((100% - 90vw) / 2)',
  },
  main: {
    height: '100vh',
    backgroundColor: '#caffca',
    padding: '0 0 10vh',
  },
  field: {
    height: '90vh !important',
    padding: '5vh 10vw !important',
    overflow: 'hidden !important',
  },
  field_mobileDevice: {
    padding: '2vh 2vw 5vh !important',
  },
  header: {
    height: '10vh',
    width: '100vw',
    backgroundColor: '#00cc00',
    padding: '0 10vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header__link: {
    height: '100%',
    padding: '0 2vw',
    textDecoration: 'none',
    color: '#ffffff',
    lineHeight: '10vh',
    '&:hover': {
      backgroundColor: '#00aa00',
    },
  },
  allTasks: {
    height: '100%',
  },
  allTasks__addNewTaskBtn: {
    display: 'inline-block',
    textDecoration: 'none',
    margin: '2vh 2vw',
    padding: '2vh 2vw',
    color: '#6f1a8c',
    backgroundColor: 'transparent',
    border: '3px solid #6f1a8c',
    borderRadius: '50rem',
    transition: 'color 0.2s linear 0.1s, background-color 0.2s linear 0.1s',
    '&:hover': {
      color: '#caffca',
      backgroundColor: '#6f1a8c',
    },
  },
  allTasks__tasksList: {
    height: '80%',
    overflow: 'auto',
  },
  allTasks__taskListItem: {
    position: 'relative',
    padding: '1vh 1vw',
    '&:hover': {
      backgroundColor: '#99ff99',
    },
  },
  allTasks__taskListItemBtnsPannel: {
    position: 'absolute',
    top: '5px',
    right: '5px',
  },
  allTasks__taskListItemline: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
