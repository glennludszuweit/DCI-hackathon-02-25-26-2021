import {
  BodyContainer,
  BodyTitle,
  CardsContainer,
  Card,
  CardTitle,
  CardBody,
} from './styles';

function Body({ AQI }) {
  return (
    <BodyContainer>
      <BodyTitle>Recommendations</BodyTitle>
      <CardsContainer>
        <Card>
          <CardTitle>General</CardTitle>
          <hr />
          <CardBody>
            {AQI === 1 || AQI === 2
              ? 'With this level of air quality, you have no limitations. Enjoy the outdoors!'
              : AQI === 3 || AQI === 4
              ? 'Enjoy the outdoors but take care about not staying too long in the outdoors in the long-term.'
              : 'Avoid intense activities outdoors. Stay away from busy roads, construction sites, open fires, and other sources of smoke. Staying indoors with an activated air filtration system would be best for your long-term health.'}
          </CardBody>
        </Card>
        <Card>
          <CardTitle>Asthma</CardTitle>
          <hr />
          <CardBody>
            {AQI === 1 || AQI === 2
              ? 'If you start to feel respiratory discomforts such as coughing or breathing difficulties, consider reducing the intensity of your outdoor activities. Try to limit the time you spend near busy roads, industrial emission stacks, open fires, and other sources of smoke.'
              : AQI === 3 || AQI === 4
              ? ' If you start to feel respiratory discomforts such as coughing or breathing difficulties, consider reducing the intensity of your outdoor activities. Try to limit the time you spend near busy roads, industrial emission stacks, open fires, and other sources of smoke.'
              : 'The current level of air quality is likely to affect your health. As a precaution, keep relevant medication(s) available. You are advised to avoid intense activities outdoors and stay away from sources of pollution, such as busy roads, open fires, and industrial sites. Staying indoors with an activated air filtration system would be best for your long-term health.'}
          </CardBody>
        </Card>
      </CardsContainer>
      <CardsContainer>
        <Card>
          <CardTitle>Children</CardTitle>
          <hr />
          <CardBody>
            {AQI === 1 || AQI === 2
              ? 'If you start to feel respiratory discomforts such as coughing or breathing difficulties, consider reducing the intensity of your outdoor activities. Try to limit the time you spend near busy roads, construction sites, open fires, and other sources of smoke.'
              : AQI === 3 || AQI === 4
              ? ' If you start to feel respiratory discomforts such as coughing or breathing difficulties, consider reducing the intensity of your outdoor activities. Try to limit the time you spend near busy roads, construction sites, open fires, and other sources of smoke.'
              : 'The current level of air quality is likely to affect your health. You are advised to avoid intense activities outdoors and stay away from sources of pollution, such as busy roads, open fires, and industrial sites. Staying indoors with an activated air filtration system would be best for your long-term health.'}
          </CardBody>
        </Card>
        <Card>
          <CardTitle>Pets</CardTitle>
          <hr />
          <CardBody>
            {AQI === 1 || AQI === 2
              ? 'To keep your dog healthy, consider reducing the intensity of your outdoor activities. Try to limit the time you spend near busy roads, construction sites, open fires, and other sources of smoke.'
              : AQI === 3 || AQI === 4
              ? 'Take your dog outside but consider reducing the intensity of your outdoor activities. Try to limit the time you spend near busy roads, construction sites, open fires, and other sources of smoke.'
              : "The current level of air quality is likely to affect your dog's health. You are advised to avoid intense activities outdoors and stay away from sources of pollution, such as busy roads, open fires, and industrial sites. Staying indoors with an activated air filtration system would be best for your dog's long-term health."}
          </CardBody>
        </Card>
      </CardsContainer>
    </BodyContainer>
  );
}

export default Body;
