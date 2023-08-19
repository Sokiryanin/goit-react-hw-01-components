import {
  Container,
  Stats,
  StatsItem,
  Title,
  Label,
  Quantity,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Stats>
        {stats.map(stat => (
          <StatsItem key={stat.id}>
            <Label>{stat.label}</Label>
            <Quantity>{stat.percentage}%</Quantity>
          </StatsItem>
        ))}
      </Stats>
    </Container>
  );
};

/*
<section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>
*/
