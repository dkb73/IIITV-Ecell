import React from 'react';
import { Modal, Box, Typography, IconButton, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

interface Student {
  name: string;
}

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  projectImgSrc: string;
  projectTitle: string;
  projectDescription: string;
  company: string;
  students: Student[];
}

const ProjectModal: React.FC<ProjectModalProps> = ({ open, onClose, projectImgSrc, projectTitle, projectDescription, company, students }) => {
    return (
      <Modal open={open} onClose={onClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: '80%', md: '60%' },
            maxWidth: 800,
            height: { xs: '90%', sm: '80%' },
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 2,
            borderRadius: 2,
            overflowY: 'auto',
          }}
        >
          <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
            <CloseIcon />
          </IconButton>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'flex-start' }}>
            <Image
              src={projectImgSrc}
              width={200}
              height={200}
              alt={projectTitle}
              className="rounded-lg object-cover"
              style={{ aspectRatio: '1/1', objectFit: 'cover' }}
            />
            <Box sx={{ ml: { xs: 0, sm: 4 }, mt: { xs: 2, sm: 0 }, flex: 1 }}>
              <Typography variant="h4" component="h2">
                {projectTitle}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                {projectDescription}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" component="h3">
                Company: {company}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" component="h3">
                Contributors
              </Typography>
              <Box sx={{ mt: 2 }}>
                {students.map((student, index) => (
                  <Typography key={index} variant="body1" component="p">
                    {student.name}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    );
  };

export default ProjectModal;