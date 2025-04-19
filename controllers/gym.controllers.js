import Gym from '../models/gym.models.js';

// ✅ CREATE - Add a new gym tool
export const createGym = async (req, res) => {
  try {
    const { gymToolsImage, gymToolsPrice, gymToolsName, gymToolsRatings } = req.body;

    const newGym = new Gym({
      gymToolsImage,
      gymToolsPrice,
      gymToolsName,
      gymToolsRatings,
    });

    await newGym.save();

    res.status(201).json({
      message: 'Gym item created successfully',
      data: newGym,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error creating gym item',
      error: error.message,
    });
  }
};

// ✅ READ - Get all gym tools
export const getAllGyms = async (req, res) => {
  try {
    const gyms = await Gym.find();
    res.status(200).json({
      message: 'Gym items fetched successfully',
      data: gyms,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching gym items',
      error: error.message,
    });
  }
};

// ✅ UPDATE - Edit a gym tool by ID
export const updateGym = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedGym = await Gym.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedGym) {
      return res.status(404).json({ message: 'Gym item not found' });
    }

    res.status(200).json({
      message: 'Gym item updated successfully',
      data: updatedGym,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating gym item',
      error: error.message,
    });
  }
};

// ✅ DELETE - Remove a gym tool by ID
export const deleteGym = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedGym = await Gym.findByIdAndDelete(id);

    if (!deletedGym) {
      return res.status(404).json({ message: 'Gym item not found' });
    }

    res.status(200).json({
      message: 'Gym item deleted successfully',
      data: deletedGym,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting gym item',
      error: error.message,
    });
  }
};
