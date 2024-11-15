import { CorporateCard } from './components/CorporateCard/CorporateCard';
import styles from './CorporateCards.module.css';
import { corporateCardsConfig } from './CorporateCards.utils';

export default function CorporateCards() {
  return (
    <div className={styles.cardsWrapper}>
      {corporateCardsConfig.map((card, i) => {
        return (
          <CorporateCard
            key={i}
            heading={card.heading}
            imageStyle={card.imageStyle}
            imageSrc={card.imageSrc}
            text={card.text}
          />
        );
      })}
    </div>
  );
}
