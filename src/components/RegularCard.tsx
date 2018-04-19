import * as React from "react";
import {
    withStyles,
    WithStyles,
    Card,
    CardContent,
    CardHeader,
    CardActions
} from "material-ui";
import * as classNames from "classnames";

import regularCardStyle from "../assets/jss/cardStyle";

type RegularCardProps = {
    plainCard?: boolean;
    classes: any; // TODO PropTypes.object.isRequired. What is a better type for this??? / make our own type!
    headerColor?: "orange" | "green" | "red" | "blue" | "purple";
    cardTitle?: JSX.Element;
    cardSubtitle?: JSX.Element;
    content?: JSX.Element;
    footer?: JSX.Element;
}

// TODO: this seems wrong.
type PropsWithStyles = RegularCardProps & WithStyles<"card" | "cardPlain" | "cardHeader" | "cardPlainHeader" | "orangeCardHeader" | "greenCardHeader" | "redCardHeader" | "purpleCardHeader" | "blueCardHeader" | "cardTitle" | "cardSubtitle" | "cardActions" >;

class RegularCard extends React.Component<PropsWithStyles, any> {

    public static defaultProps: Partial<RegularCardProps> = {
        headerColor: "purple"
    };

    constructor(props: RegularCardProps) {
        super(props);

    }

    render() {
        const {
            classes,
            headerColor,
            plainCard,
            cardTitle,
            cardSubtitle,
            content,
            footer
        } = this.props;
        const plainCardClasses = classNames({
            [" " + classes.cardPlain]: plainCard
        });
        const cardPlainHeaderClasses = classNames({
            [" " + classes.cardPlainHeader]: plainCard
        });
        // TODO: on the Card it was before like this: className={classes.card + plainCardClasses}
        // -> check if it is now correct
        const combinedCardClasses = `${classes.card} ${plainCardClasses}`;
        return (
            <Card className={combinedCardClasses}>
                <CardHeader
                    classes={{
                        root:
                        classes.cardHeader +
                        " " +
                        classes[headerColor + "CardHeader"] +
                        cardPlainHeaderClasses,
                        title: classes.cardTitle,
                        subheader: classes.cardSubtitle
                    }}
                    title={cardTitle}
                    subheader={cardSubtitle}
                />
                <CardContent>{content}</CardContent>
                {footer !== undefined ? (
                    <CardActions className={classes.cardActions}>{footer}</CardActions>
                ) : null}
            </Card>
        );
    }
}

// TODO how do I fix this style?
export default withStyles(regularCardStyle)<RegularCardProps>(RegularCard);