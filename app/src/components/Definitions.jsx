import React, { Component } from 'react';
import _ from 'lodash';
import classnames from 'classnames';
import CoverPrimary from 'components/Shared/CoverPrimary';
import Footer from 'components/Shared/Footer';
import AppStyles from 'styles/_base.scss';
import StaticPageStyles from 'styles/layout/l-static-page.scss';
import definitionsBackgroundImage from 'assets/images/definitions.jpg';
import Accordion from 'components/Shared/Accordion';

class Definitions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentAccordionIndex: null
    };
  }

  componentDidMount() {
    this.props.getDefinitionEntries();

    this.handleAutoScroll(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.definitionEntries) {
      this.handleAutoScroll(nextProps);
    }
  }

  onAccordionItemClick(index, slug) {
    this.props.push(slug);

    // close accordion item if clicked again
    if (this.state.currentAccordionIndex === index) {
      this.setState({
        currentAccordionIndex: null
      });
      return;
    }

    this.setState({
      currentAccordionIndex: index
    });
  }

  handleAutoScroll(props) {
    const urlSlug = this.props.params.term;
    // If we just got the entries and we have a slug in the URL, we expand the corresponding item
    if (props.definitionEntries && urlSlug) {
      const currentAccordionIndex = _.findIndex(props.definitionEntries, entry => entry.slug === urlSlug);
      this.setState({ currentAccordionIndex });
    }
  }

  render() {
    const accordion = (<Accordion
      entries={this.props.definitionEntries}
      onAccordionItemClick={(index, slug) => {
        this.onAccordionItemClick(index, slug);
      }}
      currentAccordionIndex={this.state.currentAccordionIndex}
      autoscroll
    />);

    return (<div>
      <CoverPrimary
        title="Definitions"
        subtitle="Review definitions of terms you will find across our site and as you explore the Map."
        backgroundImage={definitionsBackgroundImage}
        attribution="© OCEANA /A. Ellis"
      />
      <div className={classnames(StaticPageStyles['l-static-page'], StaticPageStyles['-definitions'])}>
        <div className={AppStyles.wrap}>
          <p className={StaticPageStyles.intro}>Click on the term below to see the definition.</p>
          <div className="section-page">
            {accordion}
          </div>
        </div>
      </div>
      <Footer />
    </div>);
  }

}

Definitions.propTypes = {
  definitionEntries: React.PropTypes.array,
  getDefinitionEntries: React.PropTypes.func,
  params: React.PropTypes.object,
  push: React.PropTypes.func
};

export default Definitions;
