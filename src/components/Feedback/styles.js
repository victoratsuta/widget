const styles = {
  container: {
    'position': 'relative',
    'display': 'flex',
    'justifyContent': 'flex-start',
    'alignItems': 'center',
    'flexDirection': 'column',
    'height': '100%',
    'background': '#F7F7F7',
    'padding': '30px'
  },
  row: {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'left',
    'flexDirection': 'column',
    'width': '100%',
    'background': 'white',
    'padding': '20px',
    'margin': '10px'
  },
  usernameContainer: {
    'display': 'flex',
    'flexDirection': 'row',
    'justifyContent': 'end',
    'alignItems': 'center',
    'marginBottom': '10px'
  },
  usernameContainerImg: {'borderRadius': '50%'},
  username: {'marginLeft': '10px', 'fontSize': '12px'},
  bodyContainer: {'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'end', 'alignItems': 'normal'},
  bodyContainerImg: {'marginRight': '15px'},
  wrapperTitle: {'display': 'flex', 'flexDirection': 'column'},
  title: {'fontSize': '22px'},
  body: {'marginTop': '10px', 'fontSize': '16px'},
  loadMoreButton: {
    'width': '150px',
    'height': '150px',
    'border': '#09DC96 3px solid',
    'borderRadius': '50%',
    'background': 'transparent',
    'color': '#09DC96',
    'fontWeight': 'bold',
    'marginTop': '20px',
    'cursor': 'pointer',
    'outline': 'none'
  },
  statisticContainer: {
    'display': 'inherit',
    'marginTop': '5px'
  }
};

export default styles;
