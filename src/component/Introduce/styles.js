const styles = (theme) => ({
    
    content: {
   
        color: '#2b3e79',
        [theme.breakpoints.down('md')]: {
            top: '60%'
          },
    },
    content_p:{
        color:"#828282",
        fontWeight:300,
        lineheight:23.44,
        fontSize:20,
        [theme.breakpoints.down('sm')]: {
            fontSize:16
          },
    },
    box_img_credit: {
        width: '50px',
        display: 'block',
        margin: '0 auto',
        paddingTop:15
    },
    h3: {
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 30,
        marginTop: 30,
        fontSize: 24,
    },
    img: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    },
    box_align: {
        color: '#2b3e79',
        fontSize: 18,
        paddingTop: '2rem'
    },
    h2: {
        color: '#2b3e79',
        textAlign: 'center',
    },
    p: {
        color: '#828282',
        textAlign: 'center',
        fontSize:20,
        [theme.breakpoints.down('xs')]: {
            fontSize:16,
          },

    },
    capital_title: {
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 600,
        margin: '40px 0 10px'   
    },
    btn_link: {
        color: '#15549a',
        fontWeight: 500,
        paddingBottom: 4,
        borderBottom :'2px solid #15549a',
        display: 'inline-block'
    },
    p_1:{
        color:'#778191',
        textAlign: 'center',
    },
    bgColor:{
        width:"100%",
        minHeight:300,
        borderRadius: 20
    }

});
export default styles;