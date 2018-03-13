import React from "react";
import PropTypes from "prop-types";
import Textarea from "react-textarea-autosize";
import styles from "./styles.scss";

const CommentBox = (props, context) => (
    <form>
        <Textarea
            placeholder={context.t("댓글을 달아주세요...")} />
    </form>
);

CommentBox.contextTypes = {
    t: PropTypes.func.isRequired
};

export default CommentBox;