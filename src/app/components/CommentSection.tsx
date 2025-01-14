'use client';
import React, { useState, FormEvent } from 'react';

interface Comment {
  id: number;
  content: string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  const handleCommentSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newComment) {
      const newCommentObj: Comment = {
        id: comments.length + 1,
        content: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment('');
    }
  };

  return (
    <section className="mt-8 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold text-black mb-4">Comments</h2>
      <form onSubmit={handleCommentSubmit} className="flex flex-col gap-4 mb-6">
        <textarea
          rows={4}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment..."
          className="p-4 border rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 rounded text-white font-semibold hover:bg-blue-600">
          Submit
        </button>
      </form>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="p-4 bg-white text-black rounded-lg border-b border-gray-200">
            {comment.content}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommentSection;
