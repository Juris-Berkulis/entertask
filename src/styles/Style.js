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
    }
  },
});
