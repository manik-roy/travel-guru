import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Jumbotron, Row } from 'react-bootstrap';
import './home.css';
import LocationItem from './LocationItem';
import locations from '../../fakeData';
import { useHistory } from 'react-router-dom';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowRight } from 'react-icons/bs';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Home = () => {
  const history = useHistory();
  const [slideIndex, setSlideIndex] = useState(0)
  const [booking, setBooking] = useState({})

  useEffect(() => {
    const activeItem = locations.find((loctaion, index) => index.toString() === slideIndex.toString())
    setBooking(activeItem)
  }, [slideIndex])

  const onClickHandler = swiper => {
    if (swiper.clickedSlide) {
      if (swiper.clickedSlide.attributes) {
        var a = swiper.clickedSlide.attributes.getNamedItem('data-swiper-slide-index').value;
        setSlideIndex(a);
      }
    }
  }

  return (
    <Container className="pr-0 mt-5 pt-5">
      <Row>
        <Col sm={4} xl={4}>
          <Jumbotron className="bg-transparent px-0">
            <h1 className="font-weight-bold">{booking.name}</h1>
            <p>{booking.description?.slice(0, 150)} ...</p>
            <Button className="px-4 py-2" variant="warning" onClick={() => history.push(`/booking/${booking.id}`)}>Booking <BsArrowRight /> </Button>
          </Jumbotron>
        </Col>
        <Col sm={8} xl={8}>
          <Swiper
            spaceBetween={15}
            slidesPerView={3}
            navigation
            autoplay={{
              delay: 2000,
              disableOnInteraction: false
            }}
            loop={true}
            onClick={(swiper) => onClickHandler(swiper)}
            onSlideChange={(swiper) => setSlideIndex(swiper.realIndex)}
          >
            {locations.map(location => {
              return (<SwiperSlide key={location.id}>
                {({ isActive }) => (
                  <LocationItem isActive={isActive} location={location} />
                )}
              </SwiperSlide>)
            })}
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;