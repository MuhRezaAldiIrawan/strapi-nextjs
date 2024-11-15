import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsAwardsCard extends Struct.ComponentSchema {
  collectionName: 'components_components_awards_cards';
  info: {
    displayName: 'Awards Card';
  };
  attributes: {
    awards_image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsImagePartners extends Struct.ComponentSchema {
  collectionName: 'components_components_image_partners';
  info: {
    displayName: 'imagePartners';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    partner_name: Schema.Attribute.String;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsPercentage extends Struct.ComponentSchema {
  collectionName: 'components_components_percentages';
  info: {
    displayName: 'percentage';
  };
  attributes: {
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.Text;
  };
}

export interface ComponentsPriceCard extends Struct.ComponentSchema {
  collectionName: 'components_components_price_cards';
  info: {
    displayName: 'Price Card';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
      ['fa fa-user', 'fas fa-bullhorn', 'fas fa-coins']
    >;
    subHeading: Schema.Attribute.Text;
  };
}

export interface ComponentsReasonCard extends Struct.ComponentSchema {
  collectionName: 'components_components_reason_cards';
  info: {
    displayName: 'reason card';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    subHeading: Schema.Attribute.Text;
  };
}

export interface ComponentsTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_components_testimonial_cards';
  info: {
    displayName: 'Testimonial Card';
  };
  attributes: {
    partners_brand: Schema.Attribute.String;
    partners_image_logo: Schema.Attribute.Media<'images'>;
    partners_star_testimonial: Schema.Attribute.Integer;
    partners_testimonial: Schema.Attribute.Text;
  };
}

export interface LayoutAwardSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_award_sections';
  info: {
    displayName: 'Award Section';
  };
  attributes: {
    awards: Schema.Attribute.Component<'components.awards-card', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    description: '';
    displayName: 'Hero Section';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'components.link', false>;
    subHeading: Schema.Attribute.Text;
  };
}

export interface LayoutImagePartnersSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_image_partners_sections';
  info: {
    displayName: 'ImagePartners Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    imagePartners: Schema.Attribute.Component<
      'components.image-partners',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface LayoutPriceSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_price_sections';
  info: {
    description: '';
    displayName: 'Price Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    percentage: Schema.Attribute.Component<'components.percentage', true>;
    price: Schema.Attribute.Component<'components.price-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutReasonSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_reason_sections';
  info: {
    displayName: 'Reason Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    reason: Schema.Attribute.Component<'components.reason-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_testimonial_sections';
  info: {
    displayName: 'Testimonial Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    testimonial: Schema.Attribute.Component<
      'components.testimonial-card',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface LayoutWorkPartnersSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_work_partners_sections';
  info: {
    description: '';
    displayName: 'Partners Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.awards-card': ComponentsAwardsCard;
      'components.image-partners': ComponentsImagePartners;
      'components.link': ComponentsLink;
      'components.percentage': ComponentsPercentage;
      'components.price-card': ComponentsPriceCard;
      'components.reason-card': ComponentsReasonCard;
      'components.testimonial-card': ComponentsTestimonialCard;
      'layout.award-section': LayoutAwardSection;
      'layout.hero-section': LayoutHeroSection;
      'layout.image-partners-section': LayoutImagePartnersSection;
      'layout.price-section': LayoutPriceSection;
      'layout.reason-section': LayoutReasonSection;
      'layout.testimonial-section': LayoutTestimonialSection;
      'layout.work-partners-section': LayoutWorkPartnersSection;
    }
  }
}
