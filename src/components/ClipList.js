import React, { Component } from "react";
import { Table } from "reactstrap";

class ClipList extends Component {
    render() {
        const clips = this.props.clips;
        return (
            <Table dark>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Spot</th>
                        <th>Text Content</th>
                        <th>Likes</th>
                    </tr>
                </thead>
                <tbody>
                    {!clips || clips.length <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center">
                                <b>Ops, no clips here yet</b>
                            </td>
                        </tr>
                    ) : (
                        clips.map(clip => (
                            <tr key={clip.id}>
                                <td>{clip.user}</td>
                                <td>{clip.spot}</td>
                                <td>{clip.textContent}</td>
                                <td>{clip.likes.length}</td>
                            </tr>
                        ))
                    )};    
                </tbody>
            </Table>
        );
    }
}

export default ClipList;