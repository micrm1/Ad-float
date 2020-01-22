import React,{useState} from 'react';
import {Card,Collapse,Row,Col} from 'react-bootstrap'; 
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


//プロフィールの紹介文コンポーネント
function Sentence(){
  const Line_Left={
    fontSize:20,
    fontWeight:900,
    marginBottom:60
  };
  const Line_Right={
    fontSize:20
  };

  return(
    <dev>
        <Row 
        style={{marginTop:50,
                marginLeft:70,
                marginRight:70,
              }}
        >
          <Col md={{ span: 4, offset: 11 }}>
            <Button variant="outlined" color="primary">
              編集
            </Button>
          </Col>
          <Col xs={12} md={4}>
            xs=12 md=5
          </Col>
          <Col xs={6} md={7}
          style={{marginTop:10}}
          >
            <Row>
              <Col md={4}>
                <p className="sen" style={Line_Left}>募集企業</p>
              </Col>
              <Col md={7} style={Line_Right}>
                株式会社example
              </Col>
              <Col md={4}>
                <p className="sen" style={Line_Left}>募集期間</p>
              </Col>
              <Col md={7} style={Line_Right}>
                2019/12/01～2020/03/01
              </Col>
              <Col md={4}>
                <p className="sen" style={Line_Left}>報酬金範囲</p>
              </Col>
              <Col md={7} style={Line_Right}>
                50,000円
              </Col>
            </Row>
          </Col>
          <Col md={2}>
            <p className="sen" style={{fontSize:20,fontWeight:900}}>案件詳細</p>
            <Col md={2} style={{fontSize:20}}>
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </Col>
          </Col>
        </Row>
    </dev>
  );
}


//商品一覧コンポーネント
const useStyles = makeStyles(theme => ({
  card: {
    width: "14rem",
    marginBottom: 15
  },
  cardgrid: {
    textAlign: "center",
    margin: 30
  }
}));

function LatestPosts() {
  const colors = ['Red','Orange','Yellow','Green','Blue','Violet'];
  const classes = useStyles();

  const latestpost = colors.map((color,index) =>
    <div class="grid-item">
      <Card className={classes.card}>
        <Card.Img variant="top" src="aaa.svg" />
        <Card.Body>
          <Card.Title>{color}</Card.Title>
          <Card.Text>
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );

  return (
    <div>
      <center style={{fontSize:30,marginTop:60,fontWeight:900}}>
        投稿一覧
      </center>
      <div className={classes.cardgrid}>
      <div class="grid js-masonry" data-masonry-options='{ "itemSelector": ".grid-item", "columnWidth": 30 }'>
        {latestpost}
      </div>
    </div>
    </div>
  );
}

//プロフィールメインのコンポーネント
export default function PersonProfile(){
  return(
    <div>
      <Sentence/>
      <br/>
      <LatestPosts/>
    </div>
  );
}